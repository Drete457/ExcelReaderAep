import { useState, useEffect, useMemo } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import { useClipboard } from '@/contexts/useClipboard';
import CopyButton from '@/Components/copy-button/copy-button';
import type { ExcelCellValue, CheckboxEntry } from '@/types';

interface LeadersListProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  t1: string;
  t2: string;
  cgData?: ExcelCellValue[];
}

const LeadersList: React.FC<LeadersListProps> = ({
  names,
  bo,
  t1,
  t2,
  cgData,
}) => {
  const { setNamesList } = useClipboard();
  let dataText = '';

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
      const preserved = prevList.filter(
        item => !sectionNames.includes(item),
      );

      return [...preserved, ...uncheckedNames];
    });
  };

  if (cgData && cgData[1]) {
    const date = new Date(cgData[1] as string | number);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    dataText = day + '/' + month + '/' + year;
  }

  return (
    <>
      {names.map((name, index) => (
        <section key={index}>
          {name && (
            <div className="row pt-1 justify-content-center g-3">
              {index === 0 && cgData && (
                <CCol md={2}>
                  <label
                    className="form-label fw-semibold"
                    htmlFor={`leaders-mandato-${index}`}
                  >
                    Mandato
                  </label>
                  <CFormInput
                    id={`leaders-mandato-${index}`}
                    value={String(cgData[0] ?? '')}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
              )}
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
                  id={`leaders-nome-${index}`}
                  value={String(name ?? '')}
                  readOnly
                  disabled
                  className="c-form-input--contrast"
                />
              </CCol>
              <CCol md={2} className="mt-auto">
                <label
                  className="form-label fw-semibold"
                  htmlFor={`leaders-bo-${index}`}
                >
                  BO
                </label>
                <CFormInput
                  id={`leaders-bo-${index}`}
                  value={String(bo[index] ?? '')}
                  readOnly
                  disabled
                  className="c-form-input--contrast"
                />
              </CCol>
              {index === 0 && cgData && (
                <CCol md={2}>
                  <label
                    className="form-label fw-semibold"
                    htmlFor={`leaders-validade-${index}`}
                  >
                    Validade
                  </label>
                  <CFormInput
                    id={`leaders-validade-${index}`}
                    value={dataText}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
              )}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default LeadersList;
