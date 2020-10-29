import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
import Creatable from 'react-select/creatable';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/inputfile';
import optionList from './Components/optionlist';
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
                  <CCol className="d-flex justify-content-center">
                    <Creatable
                      className="w-50"
                      isClearable
                      placeholder="Escolhe o grupo pretendido"
                      autoComplete="off"
                      options={optionList(excelFile)}
                      onChange={(choose) => {
                        console.log(choose.value);
                        const chooseGroup = excelFile.find((group) => { return group[0] === choose.value });
                        console.log(chooseGroup);
                      }}
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
