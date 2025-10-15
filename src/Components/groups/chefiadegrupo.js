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
        <h2 className="d-flex justify-content-center p-3 pt-5">
          Grupo Nº: {groupName} - Localidade: {location}
        </h2>
        <h3 className="d-flex justify-content-center">Região: {region}</h3>
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
