import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';
import { FC } from 'react';

interface RestoDaChefiaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
}

const RestoDaChefia: FC<RestoDaChefiaProps> = ({ names, bo }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe Dos Serviços Admin."
    t2="Escoteiro Chefe Adj da CG - "
  />
);

export default RestoDaChefia;
