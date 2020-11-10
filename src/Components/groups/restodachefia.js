import React from 'react';
import LeadersList from '../../helpers/LeadersList';

const RestoDaChefia = ({ names, bo }) => {
  return (
    <>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe Dos Serviços Admin.' t2='Escoteiro Chefe Adj da CG - ' />
    </>
  );
};

export default RestoDaChefia;
