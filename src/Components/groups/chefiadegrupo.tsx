import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';
import { FC } from 'react';

interface ChefiaDeGrupoProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  votes: number;
  cgData: ExcelCellValue[];
  groupName: ExcelCellValue;
  location: ExcelCellValue;
  region: ExcelCellValue;
}

const ChefiaDeGrupo: FC<ChefiaDeGrupoProps> = ({
  names,
  bo,
  votes,
  cgData,
  groupName,
  location,
  region,
}) => {
  const show = names.some(value => value);

  return (
    show && (
      <>
        <h2 className="d-flex justify-content-center p-3">
          Grupo Nº: {String(groupName)} - Localidade: {String(location)}
        </h2>
        <h3 className="d-flex justify-content-center">
          Região: {String(region)}
        </h3>
        <p className="h4 d-flex justify-content-center pt-5 pb-3">
          O grupo tem {votes} votos possíveis
        </p>
        <LeadersList
          names={names}
          bo={bo}
          t1="Escoteiro Chefe de Grupo"
          t2="Escoteiro Sub-Chefe de Grupo - "
          cgData={cgData}
        />
      </>
    )
  );
};

export default ChefiaDeGrupo;
