import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const Cla = ({ names, bo }) => {
  return (
    <>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia de Clã
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia de Clã
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe De Clã' t2='Escoteiro Sub-Chefe De clã - '/>
    </>
  );
};

export default Cla;
