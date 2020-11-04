import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const ChefiaDaAlcateia = ({ names, bo }) => {
  return (
    <>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Alcateia
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Alcateia
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe da Alcateia' t2='Escoteiro Sub-Chefe da Alcateia - ' />
    </>
  );
};

export default ChefiaDaAlcateia;
