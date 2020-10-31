import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const ChefiaDeGrupo = ({ names, bo }) => {
  return (
    <>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-5">
          Chefia de Grupo
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-5">
          Não há Chefia de Grupo
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} />
    </>
  );
};

export default ChefiaDeGrupo;
