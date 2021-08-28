import React, {useState, useEffect} from 'react';
import { CFormGroup, CCol, CInput, CLabel } from '@coreui/react';

const LeadersList = ({ names, bo, t1, t2, cgData }) => {
  let dataText = '';
  const [checkbox, setCheckbox] = useState({})

  useEffect(() => {
    if(names) {
      const inicialCheckbox = {};
      
      names.forEach((index) => {
        inicialCheckbox[index] = false;
      })

      setCheckbox(inicialCheckbox);
    }
  },[names])
  
  
  if (cgData) {
    const date = new Date(cgData[1]);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    dataText = (day + '/' + month + '/' + year)    
  }

  return names.map((name, index) => {
    
    return (
      <>
        {name && (
          <CFormGroup row className="pt-1 justify-content-center">
            {index === 0 && cgData && <CCol md="2">
              <CLabel>
                Mandato
              </CLabel>
              <CInput id={cgData[0]} placeholder={cgData[0]} disabled />
            </CCol>}
            <CCol md="5">
            <CLabel>
                {index === 0
                  ? t1
                  : t2 + index}
                <input type="checkbox" className="ml-2" checked={checkbox[index]} onChange={() => setCheckbox({...checkbox, [index]: !checkbox[index]})}/>
              </CLabel>
              <CInput id={name} placeholder={name} disabled />
            </CCol>
            <CCol md="2" className='mt-auto'>
            <CLabel>
                BO
              </CLabel>
              <CInput id={index + name} placeholder={bo[index]} disabled />
            </CCol>
            {index === 0 && cgData && <CCol md="2">
              <CLabel>
                Validade
              </CLabel>
              <CInput id={dataText} placeholder={dataText} disabled />
            </CCol>}
          </CFormGroup>
        )}
      </>
    );
  });
};

export default LeadersList;
