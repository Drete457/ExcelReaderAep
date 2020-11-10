import React from 'react';
import LeadersList from './LeadersList';

const ChefiaDeGrupo = ({ names, bo, votes, cgData }) => {
  return (
    <>
      <p className='h4 d-flex justify-content-center pt-5 pb-3'>O grupo tem {votes} votos possíveis</p>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe de Grupo' t2='Escoteiro Sub-Chefe de Grupo - ' cgData={cgData} />
    </>
  );
};

export default ChefiaDeGrupo;
