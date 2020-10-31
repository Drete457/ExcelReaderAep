import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const TribodeEscoteiros = ({ names, bo }) => {
  return (
    <>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia da Tribo de Escoteiros
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia da Tribo de Escoteiros
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} />
    </>
  );
};

export default TribodeEscoteiros;
