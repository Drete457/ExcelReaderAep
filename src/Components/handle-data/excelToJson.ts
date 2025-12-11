import xlsxFile, { Row } from 'read-excel-file';
import type { ExcelRow, ExcelCellValue } from '@/types';

const isString = (value: unknown): value is string => typeof value === 'string';

const normalizeValue = (value: unknown): ExcelCellValue => {
  if (isString(value)) {
    return value.trim();
  }
  if (value === null || value === undefined) {
    return value as null | undefined;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }
  if (value instanceof Date) {
    return value;
  }
  return String(value);
};

interface ExcelToJsonResult {
  rows: ExcelRow[];
  headerRow: ExcelRow;
}

const excelToJson = async (
  file: File | undefined,
): Promise<ExcelToJsonResult> => {
  if (!file) {
    throw new Error('Nenhum ficheiro foi selecionado.');
  }

  if (!file.name?.toLowerCase().endsWith('.xlsx')) {
    throw new Error('Formato inválido. Por favor seleciona um ficheiro .xlsx.');
  }

  const rows: Row[] = await xlsxFile(file);

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error('O ficheiro não contém dados para processar.');
  }

  let headerRow: ExcelRow | undefined;
  let dataHeaderIndex = -1;
  const payloadRows: ExcelRow[] = [];

  rows.forEach((rawRow: Row, index: number) => {
    const row: ExcelRow | undefined = Array.isArray(rawRow)
      ? rawRow.map(cell => normalizeValue(cell))
      : undefined;

    if (!row || row.length === 0) {
      return;
    }

    if (headerRow) {
      if (dataHeaderIndex === -1) {
        const hasDataHeader = row.some(cell => cell === 'Nome');
        if (hasDataHeader) {
          dataHeaderIndex = index;
        }
        return;
      }

      if (index > dataHeaderIndex) {
        const rowHasContent = row.some(cell => {
          if (cell === undefined || cell === null) {
            return false;
          }

          if (typeof cell === 'string') {
            return cell.trim().length > 0;
          }

          return true;
        });

        if (rowHasContent) {
          payloadRows.push(row);
        }
      }

      return;
    }

    const hasResponsibilityMarker = row.some(cell => cell === 'ECG');

    if (hasResponsibilityMarker) {
      headerRow = row;
    }
  });

  if (!headerRow) {
    throw new Error(
      'Não foi possível localizar a linha de responsabilidades (ECG).',
    );
  }

  if (dataHeaderIndex === -1) {
    throw new Error('Não foi possível localizar a linha de cabeçalhos (Nome).');
  }

  if (payloadRows.length === 0) {
    throw new Error(
      'Não foram encontradas linhas de dados após a linha "Nome".',
    );
  }

  return {
    rows: payloadRows,
    headerRow,
  };
};

export default excelToJson;
