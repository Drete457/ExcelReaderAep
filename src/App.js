import { Suspense, useState } from 'react';
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
import BotaoDeCopiarTodos from './Components/botao-de-copiar-todos/botao-de-copiar-todos';
import Result from './View/Result';
import './scss/style.scss';

const namesToSearch = {
  ecg: "ecg", // Escoteiro Chefe de Grupo
  escg: "escg", // Escoteiro Sub-Chefe de Grupo
  eca: "eca", // Escoteiro Chefe de Alcateia
  esca: "esca", // Escoteiro Sub-Chefe de Alcateia
  ectes: "ectes", // Escoteiro Chefe de Tribo de Escoteiros
  esctes: "esctes", // Escoteiro Sub-Chefe de Tribo de Escoteiros
  ectex: "ectex", // Escoteiro Chefe de Tribo de Exploradores
  esctex: "esctex", // Escoteiro Sub-Chefe de Tribo de Exploradores
  ecc: "ecc", // Escoteiro Chefe de Clã
  escc: "escc", // Escoteiro Sub-Chefe de Clã
  ecsa: "ecsa", // Escoteiro Chefe Dos Serviços Administrativos
  ecacg: "ecacg", // Escoteiro Chefe Adjunto de Chefe de Grupo
}
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [excelFile, setExcelFile] = useState('');
  const [positionsOfEachInformation, setPositionOfEachInformation] = useState(undefined);
  const [currentline, setLine] = useState(undefined);
  const [listaDosNomes, setListaDosNomes] = useState([]);
  const [totalDeNomes, setTotalDeNomes] = useState(0);
console.log('positionsOfEachInformation', positionsOfEachInformation)
  function reset () {
    setExcelFile('');
    setLine(undefined);
    setIsLoading(false);
    setListaDosNomes([]);
    setTotalDeNomes(0);
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
                    setPositionOfEachInformation={setPositionOfEachInformation}
                    setIsLoading={setIsLoading}
                  />
                )}
                {excelFile.length > 0 && (
                  <Suspense>
                    <CCol className="d-flex justify-content-center">
                      <Select
                        className="w-50"
                        placeholder="Escolhe o grupo pretendido"
                        autoComplete="off"
                        options={optionList(excelFile)}
                        onChange={(choose) => {
                          const select = excelFile.find((value) => {
                            if (value && value[0]) {
                              return value[0] === choose.value;
                            }
                            return null;
                          });
                          setLine(select);
                          setListaDosNomes([]);
                          setTotalDeNomes(0);
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
                  </Suspense>
                )}
                {currentline && (<>
                  <div className='botao-copiar-todos-div' hidden={listaDosNomes.length === totalDeNomes}>
                    <BotaoDeCopiarTodos texto={listaDosNomes} />
                  </div>
                  <Suspense>
                    <Result
                      result={currentline}
                      setListaDosNomes={setListaDosNomes}
                      setTotalDeNomes={setTotalDeNomes}
                    />
                  </Suspense>
                </>)}
                {isLoading && <LoadingScreen />}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
}

export default App;