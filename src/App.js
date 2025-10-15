import { Suspense, useEffect, useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CAlert,
} from '@coreui/react';
import Select from 'react-select';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/handle-data/inputfile';
import BotaoDeCopiarTodos from './Components/botao-de-copiar-todos/botao-de-copiar-todos';
import Result from './View/Result';
import './scss/style.scss';
import useExcelData from './hooks/useExcelData';
import SuspenseFallback from './Components/feedback/SuspenseFallback';

const App = () => {
  const {
    rows,
    positions,
    options,
    isLoading,
    status,
    handleFileUpload,
    reset: resetExcelData,
  } = useExcelData();
  const [currentline, setLine] = useState(undefined);
  const [listaDosNomes, setListaDosNomes] = useState([]);
  const [totalDeNomes, setTotalDeNomes] = useState(0);

  function reset() {
    resetExcelData();
    setLine(undefined);
    setListaDosNomes([]);
    setTotalDeNomes(0);
  }

  useEffect(() => {
    setLine(undefined);
    setListaDosNomes([]);
    setTotalDeNomes(0);
  }, [rows]);

  const statusColor =
    status.type === 'error'
      ? 'danger'
      : status.type === 'success'
        ? 'success'
        : status.type === 'info'
          ? 'info'
          : 'secondary';

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
                {status.message && status.type !== 'idle' && (
                  <CAlert color={statusColor}>{status.message}</CAlert>
                )}
                {!isLoading && rows.length === 0 && (
                  <InputFile
                    onFileSelected={handleFileUpload}
                    isLoading={isLoading}
                  />
                )}
                {!isLoading && rows.length > 0 && (
                  <Suspense
                    fallback={
                      <SuspenseFallback message="A carregar a lista de opções..." />
                    }
                  >
                    <CCol className="d-flex justify-content-center">
                      <Select
                        className="w-50"
                        placeholder="Escolhe o grupo pretendido"
                        autoComplete="off"
                        options={options}
                        onChange={choose => {
                          if (!choose) {
                            setLine(undefined);
                            setListaDosNomes([]);
                            setTotalDeNomes(0);
                            return;
                          }

                          const select = rows.find(value => {
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
                {currentline && (
                  <>
                    <div
                      className={`botao-copiar-todos-div${
                        listaDosNomes.length === totalDeNomes
                          ? ' botao-copiar-todos-div--hidden'
                          : ''
                      }`}
                    >
                      <BotaoDeCopiarTodos texto={listaDosNomes} />
                    </div>
                    <Suspense
                      fallback={
                        <SuspenseFallback message="A carregar os detalhes selecionados..." />
                      }
                    >
                      <Result
                        result={currentline}
                        setListaDosNomes={setListaDosNomes}
                        setTotalDeNomes={setTotalDeNomes}
                        positions={positions}
                      />
                    </Suspense>
                  </>
                )}
                {isLoading && <LoadingScreen />}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </DefaultLayout>
    </>
  );
};

export default App;
