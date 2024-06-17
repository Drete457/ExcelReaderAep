import { CLabel } from '@coreui/react';
import LeadersList from '../../helpers/LeadersList';

const ChefiaDeGrupo = ({
  names,
  bo,
  votes,
  cgData,
  groupName,
  location,
  region,
  setListaDosNomes,
}) => {
  const show = names.some(value => value);

  return (
    show && (
      <>
        <CLabel className="h2 d-flex justify-content-center p-3 pt-5">
          Grupo Nº: {groupName} - Localidade: {location}
        </CLabel>
        <CLabel className="h3 d-flex justify-content-center">
          Região: {region}
        </CLabel>
        <p className="h4 d-flex justify-content-center pt-5 pb-3">
          O grupo tem {votes} votos possíveis
        </p>
        <LeadersList
          names={names}
          bo={bo}
          t1="Escoteiro Chefe de Grupo"
          t2="Escoteiro Sub-Chefe de Grupo - "
          cgData={cgData}
          setListaDosNomes={setListaDosNomes}
        />
      </>
    )
  );
};

export default ChefiaDeGrupo;
