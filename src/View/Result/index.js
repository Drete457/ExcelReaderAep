import React from 'react';
import { CLabel } from '@coreui/react';
import ChefiaDeGrupo from '../../Components/chefiadegrupo';
import ChefiaDaAlcateia from '../../Components/chefiadaalcateia';
import TribodeEscoteiros from '../../Components/tribodeescoteiros';
import TribodeExploradores from '../../Components/tribodeexploradores';
import Cla from '../../Components/cla';
import RestoDaChefia from '../../Components/restodachefia';

const Result = ({ result }) => {
  return (
    <>
      <p></p>
      <p></p>

      <CLabel className="h2 d-flex justify-content-center p-3">
        Grupo Nº: {result[0]} - Localidade: {result[2]}
      </CLabel>
      <CLabel className="h3 d-flex justify-content-center">
        Região: {result[1]}
      </CLabel>
      <ChefiaDeGrupo result={result} />
      <ChefiaDaAlcateia result={result} />
      <TribodeEscoteiros result={result} />
      <TribodeExploradores result={result} />
      <Cla result={result} />
      <RestoDaChefia result={result} />
    </>
  );
};

export default Result;
