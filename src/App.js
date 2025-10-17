import { Suspense, useEffect, useState } from 'react';
import { CRow, CCol, CCard, CCardBody, CButton, CAlert } from '@coreui/react';
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
      {status.message && status.type !== 'idle' && (
        <div className="status-alert-container">
          <CAlert color={statusColor} className="status-alert mb-0 shadow">
            {status.message}
          </CAlert>
        </div>
      )}
      <DefaultLayout>
        <div className="app-shell">
          <header className="app-hero">
            <div className="app-hero__overlay" aria-hidden="true" />
            <div className="app-hero__content">
              <span className="app-hero__eyebrow">
                Associação dos Escoteiros de Portugal
              </span>
              <h1 className="app-hero__title">
                Conselho Jurisdicional · Controlo de Nomeações
              </h1>
            </div>
          </header>
          <main className="app-main" aria-live="polite">
            <CRow className="app-row">
              <CCol sm="12" className="d-flex justify-content-center">
                <CCard className="app-card">
                  <CCardBody>
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
                        <CCol sm="12" className="app-actions">
                          <Select
                            className="react-select-container app-select"
                            classNamePrefix="app-select"
                            placeholder="Escolhe o grupo pretendido"
                            autoComplete="off"
                            options={options}
                            menuPortalTarget={
                              typeof document !== 'undefined'
                                ? document.body
                                : undefined
                            }
                            menuPosition="fixed"
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
                            className="app-reset-button"
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
          </main>
        </div>
      </DefaultLayout>
    </>
  );
};

export default App;
