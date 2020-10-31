import React from 'react';
import { CLabel } from '@coreui/react';
import LeadersList from './LeadersList';

const RestoDaChefia = ({ names, bo }) => {
  return (
    <>
      {names.some((value) => !!value) ? (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Outros Dirigentes
        </CLabel>
      ) : (
        <CLabel className="h3 d-flex justify-content-center pt-2">
          Não há Outros Dirigentes
        </CLabel>
      )}
      <LeadersList names={names} bo={bo} />
    </>
  );
};

export default RestoDaChefia;
