import { CRow, CSpinner } from '@coreui/react';

const LoadingScreen = () => (
  <>
    <CRow className="d-flex flex-row justify-content-center">
      <CSpinner
        style={{ width: '4rem', height: '4rem' }}
        color="primary"
        variant="grow"
      />
    </CRow>
    <p className="h4 d-flex justify-content-center pt-5 pb-3">
      Controlo de Nomeações a ser carregado,
      por favor aguarde
    </p>
  </>
)

export default LoadingScreen;
