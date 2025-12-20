import LeadersList from '@/helpers/LeadersList';
import type { ExcelCellValue } from '@/types';

interface TribodeExploradoresProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
}

const TribodeExploradores: React.FC<TribodeExploradoresProps> = ({
  names,
  bo,
}) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe da Tribo de Exploradores"
    t2="Escoteiro Sub-Chefe Da Tribo de Exploradores - "
  />
);

export default TribodeExploradores;
