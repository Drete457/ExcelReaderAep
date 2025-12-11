import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface ChefiaDaAlcateiaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChefiaDaAlcateia: React.FC<ChefiaDaAlcateiaProps> = ({
  names,
  bo,
  setListaDosNomes,
}) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe da Alcateia"
    t2="Escoteiro Sub-Chefe da Alcateia - "
    setListaDosNomes={setListaDosNomes}
  />
);

export default ChefiaDaAlcateia;
