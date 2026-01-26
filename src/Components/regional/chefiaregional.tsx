import { FC, useMemo } from 'react';
import RegionalList from '@/helpers/RegionalList';
import type { ExcelCellValue } from '@/types';

interface ChefiaRegionalProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  votes: number;
  cfRData: ExcelCellValue[];
  region: ExcelCellValue;
  mcr: ExcelCellValue[];
}

const ChefiaRegional: FC<ChefiaRegionalProps> = ({
  names,
  bo,
  votes,
  cfRData,
  region,
  mcr,
}) => {
  const show = names.some(value => value) || mcr.some(value => value);

  const mcrEntries = useMemo(() => {
    const entries: {
      name: ExcelCellValue;
      bo: ExcelCellValue;
      validate: ExcelCellValue;
    }[] = [];

    for (let i = 0; i < mcr.length; i += 3) {
      const name = mcr[i];
      const validate = mcr[i + 1];
      const bo = mcr[i + 2];

      if (name || bo || validate) {
        entries.push({ name, bo, validate });
      }
    }

    return entries;
  }, [mcr]);

  return (
    show && (
      <>
        <h2 className="d-flex justify-content-center p-3 pt-5">
          Região: {String(region)}
        </h2>
        {show && (
          <p className="h4 d-flex justify-content-center pt-5 pb-3">
            A Chefia Regional tem {votes} votos possíveis
          </p>
        )}
        <RegionalList
          names={names}
          bo={bo}
          t1="Escoteiro Chefe Regional"
          t2="Escoteiro Sub-Chefe Regional - "
          cfRData={cfRData}
        />
        {mcrEntries.map((entry, index) => (
          <RegionalList
            key={`mcr-${index}`}
            names={[entry.name]}
            bo={[entry.bo]}
            t1={
              index === 0
                ? 'Presidente da Mesa do Conselho Regional'
                : 'Membro da Mesa do Conselho Regional'
            }
            t2={index === 0 ? '' : 'Membro da Mesa do Conselho Regional - '}
            cfRData={[entry.validate]}
          />
        ))}
      </>
    )
  );
};

export default ChefiaRegional;
