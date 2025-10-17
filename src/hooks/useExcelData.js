import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import excelToJson from '../Components/handle-data/excelToJson';
import optionList from '../helpers/optionlist';
import { namesToSearch } from '../Components/handle-data/responsability-position';

const createEmptyPositions = () => ({
  alcateia: [],
  tes: [],
  tex: [],
  cla: [],
  group: [],
  others: [],
  cgData: [],
  cfRegional: [],
  mcr: [],
  nucle: [],
});

const MIN_LOADING_DURATION_MS = 5000;

const waitForMinimumDuration = async (
  startedAt,
  minimumDuration = MIN_LOADING_DURATION_MS,
) => {
  const elapsed = Date.now() - startedAt;

  if (elapsed >= minimumDuration) {
    return;
  }

  const remaining = minimumDuration - elapsed;
  await new Promise(resolve => {
    setTimeout(resolve, remaining);
  });
};

const buildPositionsMap = headerRow => {
  if (!Array.isArray(headerRow) || headerRow.length === 0) {
    return createEmptyPositions();
  }

  const buckets = createEmptyPositions();
  let alcateiaChefeAssigned = false;
  let chefeRegionalAssigned = false;

  headerRow.forEach((rawResponsibility, index) => {
    if (typeof rawResponsibility !== 'string') {
      return;
    }

    const responsibility = rawResponsibility.toLowerCase();

    const pushRole = (collection, boOffset, validateOffset) => {
      collection.push({
        namePosition: index,
        bo: index + boOffset,
        validate: index + validateOffset,
      });
    };

    if (responsibility.includes(namesToSearch.ecg)) {
      pushRole(buckets.group, 8, 5);
      buckets.cgData.push({
        validate: index + 5,
        mandate: index + 1,
      });
    }

    if (responsibility.includes(namesToSearch.escg)) {
      pushRole(buckets.group, 4, 5);
    }

    if (!alcateiaChefeAssigned && responsibility.includes(namesToSearch.eca)) {
      pushRole(buckets.alcateia, 4, 5);
      alcateiaChefeAssigned = true;
    }

    if (responsibility.includes(namesToSearch.esca)) {
      pushRole(buckets.alcateia, 4, 5);
    }

    if (responsibility.includes(namesToSearch.ectes)) {
      pushRole(buckets.tes, 4, 5);
    }

    if (responsibility.includes(namesToSearch.esctes)) {
      pushRole(buckets.tes, 4, 5);
    }

    if (responsibility.includes(namesToSearch.ectex)) {
      pushRole(buckets.tex, 4, 5);
    }

    if (responsibility.includes(namesToSearch.esctex)) {
      pushRole(buckets.tex, 4, 5);
    }

    if (responsibility.includes(namesToSearch.ecc)) {
      pushRole(buckets.cla, 4, 5);
    }

    if (responsibility.includes(namesToSearch.escc)) {
      pushRole(buckets.cla, 4, 5);
    }

    if (responsibility.includes(namesToSearch.ecsa)) {
      pushRole(buckets.others, 4, 5);
    }

    if (responsibility.includes(namesToSearch.ecacg)) {
      pushRole(buckets.others, 4, 5);
    }

    if (!chefeRegionalAssigned && responsibility.includes(namesToSearch.ecr)) {
      pushRole(buckets.cfRegional, 7, 8);
      chefeRegionalAssigned = true;
    }

    if (chefeRegionalAssigned && responsibility.includes(namesToSearch.ecra)) {
      pushRole(buckets.cfRegional, 5, 6);
    }

    if (responsibility.includes(namesToSearch.ecacr)) {
      pushRole(buckets.cfRegional, 5, 6);
    }

    if (responsibility.includes(namesToSearch.pmcr)) {
      pushRole(buckets.mcr, 5, 6);
    }

    if (responsibility.includes(namesToSearch.ecnucleo)) {
      pushRole(buckets.nucle, 5, 6);
    }

    if (responsibility.includes(namesToSearch.escn)) {
      pushRole(buckets.nucle, 5, 6);
    }
  });

  return buckets;
};

const useExcelData = () => {
  const [rows, setRows] = useState([]);
  const [headerRow, setHeaderRow] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const handleId = useRef(0);
  const statusTimeoutRef = useRef(null);

  const clearStatusTimeout = useCallback(() => {
    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }
  }, []);

  const scheduleStatus = useCallback(
    (nextStatus, { autoDismiss } = {}) => {
      clearStatusTimeout();

      const shouldAutoDismiss =
        typeof autoDismiss === 'boolean'
          ? autoDismiss
          : nextStatus.type !== 'error' && nextStatus.type !== 'idle';

      setStatus(nextStatus);

      if (shouldAutoDismiss) {
        statusTimeoutRef.current = setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
          statusTimeoutRef.current = null;
        }, 5000);
      }
    },
    [clearStatusTimeout],
  );

  useEffect(() => () => clearStatusTimeout(), [clearStatusTimeout]);

  const handleFileUpload = useCallback(async file => {
    handleId.current += 1;
    const currentId = handleId.current;
    const startedAt = Date.now();

    const fileName = file?.name ? `"${file.name}"` : 'selecionado';
    scheduleStatus(
      {
        type: 'info',
        message: `A carregar o ficheiro ${fileName}. Isto pode demorar alguns segundos...`,
      },
      { autoDismiss: false },
    );
    setIsLoading(true);

    let nextRows = [];
    let nextHeaderRow;
    let nextStatus = { type: 'idle', message: '' };
    let nextStatusOptions;

    try {
      const { rows: parsedRows, headerRow: parsedHeader } =
        await excelToJson(file);

      nextRows = parsedRows;
      nextHeaderRow = parsedHeader;
      nextStatus = {
        type: 'success',
        message: `Ficheiro ${fileName} carregado com sucesso. Escolhe um item para visualizar os detalhes.`,
      };
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Ocorreu um erro ao ler o ficheiro seleccionado.';
      nextRows = [];
      nextHeaderRow = undefined;
      nextStatus = { type: 'error', message };
      nextStatusOptions = { autoDismiss: true };
    } finally {
      await waitForMinimumDuration(startedAt);

      if (handleId.current === currentId) {
        setRows(nextRows);
        setHeaderRow(nextHeaderRow);
        scheduleStatus(nextStatus, nextStatusOptions);
        setIsLoading(false);
      }
    }
  }, [scheduleStatus]);

  const reset = useCallback(() => {
    handleId.current += 1;
    setRows([]);
    setHeaderRow(undefined);
    scheduleStatus({ type: 'idle', message: '' }, { autoDismiss: false });
    setIsLoading(false);
  }, [scheduleStatus]);

  const options = useMemo(() => optionList(rows), [rows]);
  const positions = useMemo(() => buildPositionsMap(headerRow), [headerRow]);

  return {
    rows,
    positions,
    options,
    isLoading,
    status,
    handleFileUpload,
    reset,
  };
};

export default useExcelData;
