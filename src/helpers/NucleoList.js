import { useState, useEffect } from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const NucleoList = ({ names, bo, t1, t2, validation }) => {
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

    if (validation[index]) {
      const date = new Date(validation[index]);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dataText = day + '/' + month + '/' + year;
    }

    return (
      <>
        {name && (
          <CFormGroup row className="pt-1 justify-content-center">
            <CCol md="5">
              <CLabel>{index === 0 ? t1 : t2 + index}
                <input type="checkbox" className="ml-2" checked={checkbox[index]} onChange={() => setCheckbox({ ...checkbox, [index]: !checkbox[index] })} />
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
                  id={validation[index] + index}
                  placeholder={dataText}
                  disabled
                />
              </CCol>
            )}
          </CFormGroup>
        )}
      </>
    );
  });
};

export default NucleoList;
