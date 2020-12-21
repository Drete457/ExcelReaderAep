import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from '@coreui/react';
import Select from 'react-select';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/handle-data/inputfile';
import optionList from './helpers/optionlist';
import Result from './View/Result';
import './scss/style.scss';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [excelFile, setExcelFile] = useState('');
  const [currentline, setLine] = useState(undefined);

  function reset() {
    setExcelFile('');
    setLine(undefined);
    setIsLoading(false);
  }

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
                {!excelFile && (
                  <InputFile
                    setExcelFile={setExcelFile}
                    setIsLoading={setIsLoading}
                  />
                )}
                {excelFile.length > 0 && (
                  <CCol className="d-flex justify-content-center">
                    <Select
                      className="w-50"
                      placeholder="Escolhe o grupo pretendido"
                      autoComplete="off"
                      options={optionList(excelFile)}
                      onChange={(choose) => {
                        const chooseGroup = excelFile.find((group) => {
                          if (group && group[0]) {
                            return group[0] === choose.value;
                          }
                          return null;
                        });
                        setLine(chooseGroup);
                      }}
                    />
                    <CButton
                      size="sm"
                      variant="outline"
                      color="primary"
                      onClick={() => reset()}
                    >
                      Apagar o Ficheiro
                    </CButton>
                  </CCol>
                )}
                {currentline && <Result result={currentline} />}
                {isLoading && <LoadingScreen />}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
}
