import React, { useState, useCallback } from 'react';
import { CLabel } from '@coreui/react';
import ChefiaDeGrupo from '../../Components/chefiadegrupo';
import ChefiaDaAlcateia from '../../Components/chefiadaalcateia';
import TribodeEscoteiros from '../../Components/tribodeescoteiros';
import TribodeExploradores from '../../Components/tribodeexploradores';
import Cla from '../../Components/cla';
import RestoDaChefia from '../../Components/restodachefia';

const Result = ({ result }) => {
  const [votes, setVotes] = useState(0);
  const alcateiaNames = [
    result[33],
    result[38],
    result[43],
    result[48],
    result[53],
    result[58],
  ];
  const tesNames = [
    result[68],
    result[73],
    result[78],
    result[83],
    result[88],
    result[93],
  ];
  const texNames = [
    result[103],
    result[108],
    result[113],
    result[118],
    result[123],
    result[128],
  ];
  const claNames = [result[133],
  result[138],
  result[143],
  result[148],
  result[153],
  result[158]];
  const groupNames = [result[4], result[13], result[18], result[23], result[28]];
  const othersNames = [result[163],
  result[168],
  result[173],
  result[178],
  result[183]];
  const alcateiaBO = [result[37], result[42], result[47], result[52], result[57], result[62]];
  const tesBO = [result[72], result[77], result[82], result[87], result[92], result[97]];
  const texBO = [result[107], result[112], result[117], result[122], result[127], result[132]];
  const claBO = [result[137], result[142], result[147], result[152], result[157], result[162]];
  const groupBO = [result[12], result[17], result[22], result[27], result[32]];
  const othersBO = [result[167], result[172], result[177], result[182], result[187]];
console.log(result)
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
