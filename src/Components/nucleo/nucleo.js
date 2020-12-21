import React from 'react';
import { CLabel } from '@coreui/react';
import NucleoList from '../../helpers/NucleoList';

const Nucleo = ({ names, bo, votes, validation, title }) => {
  const show = names.some((value) => value);
  return (
    show ? (
      <>
        <CLabel className="h2 d-flex justify-content-center p-3 pt-5">
          {title}
        </CLabel>
        {names.some((value) => value) && (
          <p className="h4 d-flex justify-content-center pt-5 pb-3">
            O Núcleo tem {votes} votos possíveis
          </p>
        )}
        <NucleoList
          names={names}
          bo={bo}
          validation={validation}
          t1="Escoteiro Chefe de Núcleo"
          t2="Escoteiro Sub-Chefe de Núcleo - "
        />
      </>
    ) : (
      <CLabel className="h2 d-flex justify-content-center p-3 pt-5">
         Núcleo não tem chefia
    </CLabel>
    )
  );
};

export default Nucleo;
