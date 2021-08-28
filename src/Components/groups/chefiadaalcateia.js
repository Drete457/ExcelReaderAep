import LeadersList from '../../helpers/LeadersList';

const ChefiaDaAlcateia = ({ names, bo }) => {
  return (
    <>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe da Alcateia' t2='Escoteiro Sub-Chefe da Alcateia - ' />
    </>
  );
};

export default ChefiaDaAlcateia;
