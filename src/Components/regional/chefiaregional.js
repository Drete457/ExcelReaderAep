import React from 'react';
import LeadersList from '../../helpers/LeadersList';

const ChefiaRegional = ({ names, bo, votes, cgData }) => {
  return (
    <>
      <p className='h4 d-flex justify-content-center pt-5 pb-3'>A chefia Regional tem {votes} votos possíveis</p>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe Regional' t2='Escoteiro Sub-Chefe Regional - ' cgData={cgData} />
    </>
  );
};

export default ChefiaRegional;
