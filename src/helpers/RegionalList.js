import { useState, useEffect } from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';
import BotaoDeCopiar from '../Components/botao-de-copiar/botao-de-copiar';

const RegionalList = ({ names, bo, t1, t2, cfRData }) => {
  const [checkbox, setCheckbox] = useState({})

  useEffect(() => {
    if (names) {
      const inicialCheckbox = {};

      names.forEach((index) => {
        inicialCheckbox[index] = false;
      })

      setCheckbox(inicialCheckbox);
    }
  }, [names])

  return names.map((name, index) => {
    let dataText = '';
    if (cfRData[index]) {
      const date = new Date(cfRData[index]);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dataText = day + '/' + month + '/' + year;
    }

    return (
      <section key={index}>
        {name && (
          <CFormGroup row className="pt-1 justify-content-center">
            <CCol md="5">
              <CLabel>{index === 0 ? t1 : t2 + index}
                <input type="checkbox" className="ml-2" checked={checkbox[index]} onChange={() => setCheckbox({ ...checkbox, [index]: !checkbox[index] })} />
              </CLabel>
              <CLabel className="ml-2">
                <BotaoDeCopiar texto={name} />
              </CLabel>
              <CInput id={name} placeholder={name} disabled />
            </CCol>
            <CCol md="2" className="mt-auto">
              <CLabel>BO</CLabel>
              <CInput id={index + name} placeholder={bo[index]} disabled />
            </CCol>
            {dataText && (
              <CCol md="2">
                <CLabel>Validade</CLabel>
                <CInput
                  id={cfRData[index] + index}
                  placeholder={dataText}
                  disabled
                />
              </CCol>
            )}
          </CFormGroup>
        )}
      </section>
    );
  });
};

export default RegionalList;
