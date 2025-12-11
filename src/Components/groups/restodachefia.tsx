import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface RestoDaChefiaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const RestoDaChefia: React.FC<RestoDaChefiaProps> = ({
  names,
  bo,
  setListaDosNomes,
}) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe Dos Serviços Admin."
    t2="Escoteiro Chefe Adj da CG - "
    setListaDosNomes={setListaDosNomes}
  />
);

export default RestoDaChefia;
