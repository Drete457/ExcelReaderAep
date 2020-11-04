import React from 'react';
import LeadersList from './LeadersList';

const TribodeExploradores = ({ names, bo }) => {
  return (
    <>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe da Tribo de Exploradores' t2='Escoteiro Sub-Chefe Da Tribo de Exploradores - ' />
    </>
  );
};

export default TribodeExploradores;
