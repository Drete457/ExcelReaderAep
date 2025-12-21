import { useState } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import { useClipboard } from '@/contexts/useClipboard';
import CopyButton from '@/Components/copy-button/copy-button';
import type { ExcelCellValue, CheckboxEntry } from '@/types';

const formatDateSafe = (value: ExcelCellValue): string => {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'number' && !Number.isNaN(value)) {
    const excelEpoch = new Date(Date.UTC(1899, 11, 30));
    const asDate = new Date(excelEpoch.getTime() + value * 86400000);
    return Number.isNaN(asDate.getTime())
      ? ''
      : `${asDate.getUTCDate()}/${asDate.getUTCMonth() + 1}/${asDate.getUTCFullYear()}`;
  }

  const parsed = new Date(value as string);
  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return `${parsed.getDate()}/${parsed.getMonth() + 1}/${parsed.getFullYear()}`;
};

interface RegionalListProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  t1: string;
  t2: string;
  cfRData: ExcelCellValue[];
}

const RegionalList: React.FC<RegionalListProps> = ({
  names,
  bo,
  t1,
  t2,
  cfRData,
}) => {
  const { setNamesList } = useClipboard();

  const [checkbox, setCheckbox] = useState<CheckboxEntry[]>(() =>
    names.map(name => ({ name, checked: false })),
  );

  const handleCheckbox = (index: number): void => {
    const newData = [...checkbox];
    newData[index].checked = !newData[index].checked;

    setCheckbox(newData);
    setNamesList(prevList => {
      const sectionNames = newData
        .map(entry => entry.name)
        .filter(
          (name): name is string => typeof name === 'string' && Boolean(name),
        );
      const uncheckedNames = newData
        .filter(entry => !entry.checked && entry.name)
        .map(entry => entry.name)
        .filter((name): name is string => typeof name === 'string');
      const preserved = prevList.filter(item => !sectionNames.includes(item));

      return [...preserved, ...uncheckedNames];
    });
  };

  return (
    <>
      {names.map((name, index) => {
        let dataText = '';
        if (cfRData[index]) {
          dataText = formatDateSafe(cfRData[index]);
        }

        return (
          <section key={index}>
            {name && (
              <div className="row pt-1 justify-content-center g-3">
                <CCol md={5}>
                  <section className="d-flex justify-content-between mt-2">
                    <label className="form-label d-flex align-items-center fw-semibold mb-0">
                      {index === 0 ? t1 : t2 + index}
                      <input
                        type="checkbox"
                        className="form-check-input ms-2 list-checkbox"
                        checked={checkbox[index]?.checked ?? false}
                        onChange={() => handleCheckbox(index)}
                        aria-label={`${index === 0 ? t1 : t2 + index} - Marcar para excluir da cópia`}
                      />
                    </label>
                    <div className="d-inline-flex">
                      <CopyButton
                        text={String(name)}
                        ariaLabel={`Copiar nome: ${String(name)}`}
                      />
                    </div>
                  </section>
                  <CFormInput
                    id={`regional-nome-${index}`}
                    value={String(name ?? '')}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
                <CCol md={2} className="mt-auto">
                  <label
                    className="form-label fw-semibold"
                    htmlFor={`regional-bo-${index}`}
                  >
                    BO
                  </label>
                  <CFormInput
                    id={`regional-bo-${index}`}
                    value={String(bo[index] ?? '')}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
                <CCol md={2}>
                  <label
                    className="form-label fw-semibold"
                    htmlFor={`regional-validade-${index}`}
                  >
                    Validade
                  </label>
                  <CFormInput
                    id={`regional-validade-${index}`}
                    value={dataText}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
};

export default RegionalList;
