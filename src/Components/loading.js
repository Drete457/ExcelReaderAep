import React, { useState } from 'react';
import { CRow, CModal, CSpinner } from '@coreui/react';

const LoadingScreen = ({ choose }) => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <CModal show={modal} onClose={setModal} centered size="sm">
        <CRow md="12" className="d-flex flex-row justify-content-center">
          <CSpinner
            size="xl"
            style={{ width: '4rm', height: '4rm' }}
            color="primary"
            variant="grow"
          />
        </CRow>
      </CModal>
    </>
  );
};

export default LoadingScreen;
