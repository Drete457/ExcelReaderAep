import LeadersList from '../../helpers/LeadersList';

const Cla = ({ names, bo }) => {
  return (
    <>
      <LeadersList names={names} bo={bo} t1='Escoteiro Chefe De Clã' t2='Escoteiro Sub-Chefe De clã - ' />
    </>
  );
};

export default Cla;
