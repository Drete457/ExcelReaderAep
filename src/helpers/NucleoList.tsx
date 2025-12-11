import { useState, useEffect } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import BotaoDeCopiar from '../Components/botao-de-copiar/botao-de-copiar';
import type { ExcelCellValue, CheckboxEntry } from '../types';

interface NucleoListProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  t1: string;
  t2: string;
  validation: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const NucleoList: React.FC<NucleoListProps> = ({
  names,
  bo,
  t1,
  t2,
  validation,
  setListaDosNomes,
}) => {
  const [checkbox, setCheckbox] = useState<CheckboxEntry[]>([]);

  const handleCheckbox = (index: number): void => {
    const newData = [...checkbox];
    newData[index].checked = !newData[index].checked;

    setCheckbox(newData);
    setListaDosNomes(info => {
      const sectionNames = newData
        .map(entry => entry.name)
        .filter(
          (name): name is string => typeof name === 'string' && Boolean(name),
        );
      const uncheckedNames = newData
        .filter(entry => !entry.checked && entry.name)
        .map(entry => entry.name)
        .filter((name): name is string => typeof name === 'string');
      const preserved = info.filter(item => !sectionNames.includes(item));

      return [...preserved, ...uncheckedNames];
    });
  };

  useEffect(() => {
    if (names) {
      const inicialCheckbox: CheckboxEntry[] = [];

      names.forEach((name, index) => {
        inicialCheckbox[index] = { name, checked: false };
      });

      setCheckbox(inicialCheckbox);
    }
  }, [names]);

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
                      />
                    </label>
                    <div className="d-inline-flex">
                      <BotaoDeCopiar texto={String(name)} />
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
