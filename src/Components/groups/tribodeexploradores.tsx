import LeadersList from '../../helpers/LeadersList';
import type { ExcelCellValue } from '../../types';

interface TribodeExploradoresProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const TribodeExploradores: React.FC<TribodeExploradoresProps> = ({
  names,
  bo,
  setListaDosNomes,
}) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe da Tribo de Exploradores"
    t2="Escoteiro Sub-Chefe Da Tribo de Exploradores - "
    setListaDosNomes={setListaDosNomes}
  />
);

export default TribodeExploradores;
