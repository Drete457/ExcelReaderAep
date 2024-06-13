import { CLabel } from "@coreui/react";
import RegionalList from "../../helpers/RegionalList";

const ChefiaRegional = ({
  names,
  bo,
  votes,
  cfRData,
  region,
  mcr,
  setListaDosNomes,
}) => {
  const show = names.some((value) => value);

  return (
    show && (
      <>
        <CLabel className="h2 d-flex justify-content-center p-3 pt-5">
          Região: {region}
        </CLabel>
        {names.some((value) => value) && (
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
