import RegionalList from '../../helpers/RegionalList';
import type { ExcelCellValue } from '../../types';

interface ChefiaRegionalProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  votes: number;
  cfRData: ExcelCellValue[];
  region: ExcelCellValue;
  mcr: ExcelCellValue[];
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChefiaRegional: React.FC<ChefiaRegionalProps> = ({
  names,
  bo,
  votes,
  cfRData,
  region,
  mcr,
  setListaDosNomes,
}) => {
  const show = names.some(value => value);

  return (
    show && (
      <>
        <h2 className="d-flex justify-content-center p-3 pt-5">
          Região: {String(region)}
        </h2>
        {names.some(value => value) && (
          <p className="h4 d-flex justify-content-center pt-5 pb-3">
            A Chefia Regional tem {votes} votos possíveis
          </p>
        )}
        <RegionalList
          names={names}
          bo={bo}
          t1="Escoteiro Chefe Regional"
          t2="Escoteiro Sub-Chefe Regional - "
          cfRData={cfRData}
          setListaDosNomes={setListaDosNomes}
        />
        <RegionalList
          names={[mcr[0]]}
          bo={[mcr[2]]}
          t1="Presidente da Mesa do Conselho Regional"
          t2=" "
          cfRData={[mcr[1]]}
          setListaDosNomes={setListaDosNomes}
        />
      </>
    )
  );
};

export default ChefiaRegional;
