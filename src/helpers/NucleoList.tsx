import { useState, useEffect, useMemo } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import { useClipboard } from '@/contexts/useClipboard';
import CopyButton from '@/Components/copy-button/copy-button';
import type { ExcelCellValue, CheckboxEntry } from '@/types';

interface NucleoListProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  t1: string;
  t2: string;
  validation: ExcelCellValue[];
}

const NucleoList: React.FC<NucleoListProps> = ({
  names,
  bo,
  t1,
  t2,
  validation,
}) => {
  const { setNamesList } = useClipboard();

  // Initialize checkbox state from names
  const initialCheckbox = useMemo(() => {
    return names.map(name => ({ name, checked: false }));
  }, [names]);

  const [checkbox, setCheckbox] = useState<CheckboxEntry[]>(
    () => initialCheckbox,
  );

  // Sync checkbox when names change (external data update)
  useEffect(() => {
    setCheckbox(initialCheckbox);
  }, [initialCheckbox]);

  const handleCheckbox = (index: number): void => {
    const newData = [...checkbox];
    newData[index].checked = !newData[index].checked;

    setCheckbox(newData);
    setNamesList((info: string[]) => {
      const sectionNames = newData
        .map(entry => entry.name)
        .filter(
          (name): name is string => typeof name === 'string' && Boolean(name),
        );
      const uncheckedNames = newData
        .filter(entry => !entry.checked && entry.name)
        .map(entry => entry.name)
        .filter((name): name is string => typeof name === 'string');
      const preserved = info.filter(
        (item: string) => !sectionNames.includes(item),
      );

      return [...preserved, ...uncheckedNames];
    });
  };

  return (
    <>
      {names.map((name, index) => {
        let dataText = '';

        if (validation[index]) {
          const date = new Date(validation[index] as string | number);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          dataText = day + '/' + month + '/' + year;
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
                    id={`nucleo-nome-${index}`}
                    value={String(name ?? '')}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
                <CCol md={2} className="mt-auto">
                  <label
                    className="form-label fw-semibold"
                    htmlFor={`nucleo-bo-${index}`}
                  >
                    BO
                  </label>
                  <CFormInput
                    id={`nucleo-bo-${index}`}
                    value={String(bo[index] ?? '')}
                    readOnly
                    disabled
                    className="c-form-input--contrast"
                  />
                </CCol>
                {dataText && (
                  <CCol md={2}>
                    <label
                      className="form-label fw-semibold"
                      htmlFor={`nucleo-validade-${index}`}
                    >
                      Validade
                    </label>
                    <CFormInput
                      id={`nucleo-validade-${index}`}
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
        );
      })}
    </>
  );
};

export default NucleoList;
