import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CInputFile,
  CLabel
} from '@coreui/react';
import exceltojson from './Components/exceltojson';
import DefaultLayout from './View/DefaultLayout';
import './scss/style.scss';

export default function App() {
  const [excelFile, setExcelFile] = useState('');
  const [currentline, setLine] = useState({});

  return (
    <>
      <DefaultLayout>
        <CRow className="p-3">
          <CCol sm="12" className="d-flex justify-content-center">
            <CCard>
              <CCardHeader className="h1 p-4">
                Conselho Jurisdicional - Visualizador do Controlo de Nomeações
              </CCardHeader>
              <CCardBody>
              <CCol>
                <CInputFile
                  custom
                  id="custom-file-input"
                  accept=".xlsx"
                  onChange={(event) => {
                    exceltojson(event).then((result) => {
                      console.log(result);
                      setExcelFile(result);
                    });
                  }}
                />
                <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Pressiona aqui para escolheres o ficheiro
                    </CLabel>
                    </CCol>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
}

/* <input
type="file"
accept=".xlsx"
onChange={(event) => {
  exceltojson(event).then((result) => {
    console.log(result);
    setExcelFile(result);
  });
}}
/> */
