import { useMemo, useEffect, lazy, memo, FC } from 'react';
import { useClipboard } from '@/contexts';
import allbo from '@/Components/handle-data/allbo';
import allleaders from '@/Components/handle-data/allleaders';
import cfRegionalData from '@/Components/handle-data/cfRegional';
import nData from '@/Components/handle-data/nucleos';
import type { ExcelRow, Positions, ExcelCellValue } from '@/types';

const ChefiaDeGrupo = lazy(() => import('@/Components/groups/chefiadegrupo'));
const ChefiaDaAlcateia = lazy(
  () => import('@/Components/groups/chefiadaalcateia'),
);
const TribodeEscoteiros = lazy(
  () => import('@/Components/groups/tribodeescoteiros'),
);
const TribodeExploradores = lazy(
  () => import('@/Components/groups/tribodeexploradores'),
);
const Cla = lazy(() => import('@/Components/groups/cla'));
const RestoDaChefia = lazy(() => import('@/Components/groups/restodachefia'));
const ChefiaRegional = lazy(
  () => import('@/Components/regional/chefiaregional'),
);
const Nucleo = lazy(() => import('@/Components/nucleo/nucleo'));

interface ResultProps {
  result: ExcelRow;
  positions: Positions;
}

const Result: FC<ResultProps> = ({ result, positions }) => {
  const { setNamesList, setTotalNames } = useClipboard();
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

  // Calculate all names and votes (pure computation)
  const { allNames, votes } = useMemo(() => {
    const allTheNames: ExcelCellValue[] = [
      ...alcateiaNames,
      ...tesNames,
      ...texNames,
      ...claNames,
      ...groupNames,
      ...othersNames,
      ...cfRegional,
      ...ncf,
    ];
    const allTheNamesNoNull = allTheNames.filter(
      (value): value is string => typeof value === 'string' && Boolean(value),
    );

    return {
      allNames: allTheNamesNoNull,
      votes: allTheNamesNoNull.length,
    };
  }, [
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cfRegional,
    ncf,
  ]);

  // Sync with clipboard context (side effect)
  // Reset namesList when result changes (new group selected)
  useEffect(() => {
    setNamesList(allNames);
    setTotalNames(votes);
  }, [allNames, votes, setNamesList, setTotalNames]);

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
        mcr={mcr}
      />

      <Nucleo
        names={ncf}
        bo={nBO}
        validation={nValidade}
        votes={votes}
        title={result[0]}
      />
    </>
  );
};

export default memo(Result);
