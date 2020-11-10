import React, { useState, useEffect, lazy } from 'react';
import { CLabel } from '@coreui/react';
import allbo from '../../Components/handle-data/allbo';
import allleaders from '../../Components/handle-data/allleaders';
import cfRegionalData from '../../Components/handle-data/cfRegional';

const ChefiaDeGrupo = lazy(() =>
  import('../../Components/groups/chefiadegrupo'),
);
const ChefiaDaAlcateia = lazy(() =>
  import('../../Components/groups/chefiadaalcateia'),
);
const TribodeEscoteiros = lazy(() =>
  import('../../Components/groups/tribodeescoteiros'),
);
const TribodeExploradores = lazy(() =>
  import('../../Components/groups/tribodeexploradores'),
);
const Cla = lazy(() => import('../../Components/groups/cla'));
const RestoDaChefia = lazy(() =>
  import('../../Components/groups/restodachefia'),
);
const ChefiaRegional = lazy(() => import('../../Components/regional/chefiaregional'));

const Result = ({ result }) => {
  const [votes, setVotes] = useState(0);
  const {
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cgData,
  } = allleaders(result);
  const { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO } = allbo(result);
  const { cfRegional, cfBO, cfRData } = cfRegionalData(result);

  useEffect(() => {
    const allTheNames = [
      ...alcateiaNames,
      ...tesNames,
      ...texNames,
      ...claNames,
      ...groupNames,
      ...othersNames,
      ...cfRegional,
    ];
    const count = allTheNames.filter((value) => value).length;

    setVotes(count);
  }, [alcateiaNames, tesNames, texNames, claNames, groupNames, othersNames, cfRegional]);
  
  return (
    <>
      <CLabel className="h2 d-flex justify-content-center p-3 pt-3">
        Grupo Nº: {result[0]} - Localidade: {result[2]}
      </CLabel>
      <CLabel className="h3 d-flex justify-content-center">
        Região: {result[1]}
      </CLabel>
      <ChefiaDeGrupo names={groupNames} bo={groupBO} votes={votes} cgData={cgData} />
      <ChefiaDaAlcateia names={alcateiaNames} bo={alcateiaBO} />
      <TribodeEscoteiros names={tesNames} bo={tesBO} />
      <TribodeExploradores names={texNames} bo={texBO} />
      <Cla names={claNames} bo={claBO} />
      <RestoDaChefia names={othersNames} bo={othersBO} />
      <ChefiaRegional names={cfRegional} bo={cfBO} votes={votes} cfRData={cfRData} />
    </>
  );
};

export default Result;
