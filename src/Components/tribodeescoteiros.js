import React from 'react';
import LeadersList from './LeadersList';

const TribodeEscoteiros = ({ names, bo }) => {
  return (
    <>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe da Tribo de Escoteiros' t2='Escoteiro Sub-Chefe Da Tribo de Escoteiros - ' />
    </>
  );
};

export default TribodeEscoteiros;
