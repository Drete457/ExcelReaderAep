import React, { useState, useCallback } from 'react';
import { CLabel } from '@coreui/react';
import allbo from '../../Components/allbo';
import allleaders from '../../Components/allleaders';

const ChefiaDeGrupo = React.lazy(() => import('../../Components/chefiadegrupo'));
const ChefiaDaAlcateia = React.lazy(() => import('../../Components/chefiadaalcateia'));
const TribodeEscoteiros = React.lazy(() => import('../../Components/tribodeescoteiros'));
const TribodeExploradores = React.lazy(() => import('../../Components/tribodeexploradores'));
const Cla = React.lazy(() => import('../../Components/cla'));
const RestoDaChefia = React.lazy(() => import('../../Components/restodachefia'));

const Result = ({ result }) => {
  const [votes, setVotes] = useState(0);
  const {
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
  } = allleaders(result);
  const { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO } = allbo(result);

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
      <ChefiaDeGrupo names={groupNames} bo={groupBO} />
      <ChefiaDaAlcateia names={alcateiaNames} bo={alcateiaBO} />
      <TribodeEscoteiros names={tesNames} bo={tesBO} />
      <TribodeExploradores names={texNames} bo={texBO} />
      <Cla names={claNames} bo={claBO} />
      <RestoDaChefia names={othersNames} bo={othersBO} />
    </>
  );
};

export default Result;

/* const countVotes = useCallback(() => {
  setVotes(votes + 1);
});
console.log(votes) */
