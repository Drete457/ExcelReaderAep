import { Suspense, useEffect } from 'react';
import { CRow, CCol, CAlert } from '@coreui/react';
import type { SingleValue } from 'react-select';
import DefaultLayout from './View/DefaultLayout';
import LoadingScreen from './Components/loading';
import InputFile from './Components/handle-data/inputfile';
import CopyAllButton from './Components/copy-all-button/copy-all-button';
import Result from './View/Result';
import './scss/style.scss';
import useExcelData from './hooks/useExcelData';
import { useGroupSelection } from './hooks/useGroupSelection';
import { ClipboardProvider } from './contexts/ClipboardContext';
import { useClipboard } from './contexts/useClipboard';
import SuspenseFallback from './Components/feedback/SuspenseFallback';
import ErrorBoundary from './Components/feedback/ErrorBoundary';
import { Button, Card, CardBody, Select, SkeletonCard } from './Components/ui';
import type { SelectOption } from './types';

const AppContent: React.FC = () => {
  const {
    rows,
    positions,
    options,
    isLoading,
    status,
    handleFileUpload,
    reset: resetExcelData,
  } = useExcelData();

  const { selectedLine, selectGroup, clearSelection } = useGroupSelection(rows);
  const { namesList, totalNames, resetClipboard } = useClipboard();

  function reset(): void {
    resetExcelData();
    clearSelection();
    resetClipboard();
  }

  useEffect(() => {
    clearSelection();
    resetClipboard();
  }, [rows, clearSelection, resetClipboard]);

  const statusColor =
    status.type === 'error'
      ? 'danger'
      : status.type === 'success'
        ? 'success'
        : status.type === 'info'
          ? 'info'
          : 'secondary';

  const handleGroupChange = (choose: SingleValue<SelectOption>): void => {
    if (!choose) {
      clearSelection();
      resetClipboard();
      return;
    }
    selectGroup(choose.value);
    resetClipboard();
  };

  return (
    <ErrorBoundary>
      {status.message && status.type !== 'idle' && (
        <div className="status-alert-container">
          <CAlert
            color={statusColor}
            className="status-alert mb-0 shadow"
            role="alert"
            aria-live="polite"
          >
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
              <CCol sm={12} className="d-flex justify-content-center">
                <Card>
                  <CardBody>
                    {!isLoading && rows.length === 0 && (
                      <InputFile
                        onFileSelected={handleFileUpload}
                        isLoading={isLoading}
                      />
                    )}
                    {!isLoading && rows.length > 0 && (
                      <Suspense fallback={<SkeletonCard />}>
                        <CCol sm={12} className="app-actions">
                          <Select
                            placeholder="Escolhe o grupo pretendido"
                            options={options}
                            onChange={handleGroupChange}
                            aria-label="Selecionar grupo ou núcleo"
                            aria-describedby="group-select-help"
                          />
                          <span
                            id="group-select-help"
                            className="visually-hidden"
                          >
                            Use as setas ou digite para encontrar o grupo
                            pretendido
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            color="primary"
                            onClick={reset}
                            className="app-reset-button"
                            aria-label="Apagar o ficheiro carregado e reiniciar"
                          >
                            Apagar o Ficheiro
                          </Button>
                        </CCol>
                      </Suspense>
                    )}
                    {selectedLine && (
                      <>
                        <div
                          className={`botao-copiar-todos-div${
                            namesList.length === totalNames
                              ? ' botao-copiar-todos-div--hidden'
                              : ''
                          }`}
                          role="region"
                          aria-label="Ação de cópia rápida"
                        >
                          <CopyAllButton names={namesList} />
                        </div>
                        <Suspense
                          fallback={
                            <SuspenseFallback message="A carregar os detalhes selecionados..." />
                          }
                        >
                          <Result result={selectedLine} positions={positions} />
                        </Suspense>
                      </>
                    )}
                    {isLoading && <LoadingScreen />}
                  </CardBody>
                </Card>
              </CCol>
            </CRow>
          </main>
        </div>
      </DefaultLayout>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return (
    <ClipboardProvider>
      <AppContent />
    </ClipboardProvider>
  );
};

export default App;
