import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const ChefiaDeGrupo = ({ names, bo, votes }) => {
  return (
    <>
      <p className='h4 d-flex justify-content-center pt-5'>O grupo tem {votes} votos possíveis</p>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Chefia de Grupo
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Chefia de Grupo
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} />
    </>
  );
};

export default ChefiaDeGrupo;
