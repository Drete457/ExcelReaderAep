import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';
import { FC } from 'react';

interface ChefiaDaAlcateiaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
}

const ChefiaDaAlcateia: FC<ChefiaDaAlcateiaProps> = ({ names, bo }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe da Alcateia"
    t2="Escoteiro Sub-Chefe da Alcateia - "
  />
);

export default ChefiaDaAlcateia;
