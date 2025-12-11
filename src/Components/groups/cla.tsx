import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface ClaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const Cla: React.FC<ClaProps> = ({ names, bo, setListaDosNomes }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe De Clã"
    t2="Escoteiro Sub-Chefe De clã - "
    setListaDosNomes={setListaDosNomes}
  />
);

export default Cla;
