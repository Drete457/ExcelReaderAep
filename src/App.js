import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/inputfile';
import Creatable from 'react-select/creatable';
import './scss/style.scss';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
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
                {isLoading && <LoadingScreen />}
                {!excelFile && (
                  <InputFile
                    setExcelFile={setExcelFile}
                    setIsLoading={setIsLoading}
                  />
                )}
                {excelFile.length > 0 && (
                  <CCol>
                    <Creatable
                      className="w-50"
                      isClearable
                      placeholder="Escolhe o grupo pretendido"
                      autoComplete="off"
                      options={}
                      onChange={() => {}}
                    />
                  </CCol>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
}
