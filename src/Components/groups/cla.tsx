import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface ClaProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
}

const Cla: React.FC<ClaProps> = ({ names, bo }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe De Clã"
    t2="Escoteiro Sub-Chefe De clã - "
  />
);

export default Cla;
