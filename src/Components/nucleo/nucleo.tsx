import NucleoList from '@/helpers/NucleoList';
import type { ExcelCellValue } from '@/types';

interface NucleoProps {
  names: ExcelCellValue[];
  bo: ExcelCellValue[];
  votes: number;
  validation: ExcelCellValue[];
  title: ExcelCellValue;
  setListaDosNomes: React.Dispatch<React.SetStateAction<string[]>>;
}

const Nucleo: React.FC<NucleoProps> = ({
  names,
  bo,
  votes,
  validation,
  title,
  setListaDosNomes,
}) => {
  const show = names.some(value => value);

  return (
    show && (
      <>
        <h2 className="d-flex justify-content-center p-3 pt-5">
          {String(title)}
        </h2>
        {names.some(value => value) && (
          <p className="h4 d-flex justify-content-center pt-5 pb-3">
            O Núcleo tem {votes} votos possíveis
          </p>
        )}
        <NucleoList
          names={names}
          bo={bo}
          validation={validation}
          t1="Escoteiro Chefe de Núcleo"
          t2="Escoteiro Sub-Chefe de Núcleo - "
          setListaDosNomes={setListaDosNomes}
        />
      </>
    )
  );
};

export default Nucleo;
