import { useState, useEffect, lazy, memo } from 'react';
import allbo from '../../Components/handle-data/allbo';
import allleaders from '../../Components/handle-data/allleaders';
import cfRegionalData from '../../Components/handle-data/cfRegional';
import nData from '../../Components/handle-data/nucleos';

const ChefiaDeGrupo = lazy(
  () => import('../../Components/groups/chefiadegrupo'),
);
const ChefiaDaAlcateia = lazy(
  () => import('../../Components/groups/chefiadaalcateia'),
);
const TribodeEscoteiros = lazy(
  () => import('../../Components/groups/tribodeescoteiros'),
);
const TribodeExploradores = lazy(
  () => import('../../Components/groups/tribodeexploradores'),
);
const Cla = lazy(() => import('../../Components/groups/cla'));
const RestoDaChefia = lazy(
  () => import('../../Components/groups/restodachefia'),
);
const ChefiaRegional = lazy(
  () => import('../../Components/regional/chefiaregional'),
);
const Nucleo = lazy(() => import('../../Components/nucleo/nucleo'));

const Result = ({ result, setListaDosNomes, setTotalDeNomes, positions }) => {
  const [votes, setVotes] = useState(0);
  const {
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cgData,
  } = allleaders(result, positions);
  const { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO } = allbo(
    result,
    positions,
  );
  const { cfRegional, cfBO, cfRData, mcr } = cfRegionalData(result, positions);
  const { ncf, nValidade, nBO } = nData(result, positions);

  useEffect(() => {
    const allTheNames = [
      ...alcateiaNames,
      ...tesNames,
      ...texNames,
      ...claNames,
      ...groupNames,
      ...othersNames,
      ...cfRegional,
      ...ncf,
    ];
    const allTheNamesNoNull = allTheNames.filter(value => value);

    setVotes(allTheNamesNoNull.length);
    setListaDosNomes(allTheNamesNoNull);
    setTotalDeNomes(allTheNamesNoNull.length);
  }, [
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cfRegional,
    ncf,
    setListaDosNomes,
    setTotalDeNomes,
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
        setListaDosNomes={setListaDosNomes}
      />

      <ChefiaDaAlcateia
        names={alcateiaNames}
        bo={alcateiaBO}
        setListaDosNomes={setListaDosNomes}
      />
      <TribodeEscoteiros
        names={tesNames}
        bo={tesBO}
        setListaDosNomes={setListaDosNomes}
      />
      <TribodeExploradores
        names={texNames}
        bo={texBO}
        setListaDosNomes={setListaDosNomes}
      />
      <Cla names={claNames} bo={claBO} setListaDosNomes={setListaDosNomes} />
      <RestoDaChefia
        names={othersNames}
        bo={othersBO}
        setListaDosNomes={setListaDosNomes}
      />

      <ChefiaRegional
        names={cfRegional}
        bo={cfBO}
        votes={votes}
        cfRData={cfRData}
        region={result[0]}
        mcr={mcr}
        setListaDosNomes={setListaDosNomes}
      />

      <Nucleo
        names={ncf}
        bo={nBO}
        validation={nValidade}
        votes={votes}
        title={result[0]}
        setListaDosNomes={setListaDosNomes}
      />
    </>
  );
};

export default memo(Result);
