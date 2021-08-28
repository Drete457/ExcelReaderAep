import { CRow, CSpinner } from '@coreui/react';

const LoadingScreen = () => {
  return (
    <>
      <CRow className="d-flex flex-row justify-content-center">
        <CSpinner
          style={{ width: '4rem', height: '4rem' }}
          color="primary"
          variant="grow"
        />
      </CRow>
    </>
  );
};

export default LoadingScreen;
