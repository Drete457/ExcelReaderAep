import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface TribodeEscoteirosProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
}

const TribodeEscoteiros: React.FC<TribodeEscoteirosProps> = ({ names, bo }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe da Tribo de Escoteiros"
    t2="Escoteiro Sub-Chefe Da Tribo de Escoteiros - "
  />
);

export default TribodeEscoteiros;
