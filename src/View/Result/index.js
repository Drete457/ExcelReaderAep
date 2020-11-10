import React, { useState, useEffect, lazy } from 'react';
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
const ChefiaRegional = lazy(() =>
  import('../../Components/regional/chefiaregional'),
);

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
  }, [
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cfRegional,
  ]);

  return (
    <>
      <ChefiaDeGrupo
        names={groupNames}
        bo={groupBO}
        votes={votes}
        cgData={cgData}
        groupName={result[0]}
        location={result[2]}
        region={result[1]}
      />
      <ChefiaDaAlcateia names={alcateiaNames} bo={alcateiaBO} />
      <TribodeEscoteiros names={tesNames} bo={tesBO} />
      <TribodeExploradores names={texNames} bo={texBO} />
      <Cla names={claNames} bo={claBO} />
      <RestoDaChefia names={othersNames} bo={othersBO} />

      <ChefiaRegional
        names={cfRegional}
        bo={cfBO}
        votes={votes}
        cfRData={cfRData}
        region={result[0]}
      />
    </>
  );
};

export default Result;
