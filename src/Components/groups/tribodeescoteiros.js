import LeadersList from '../../helpers/LeadersList';

const TribodeEscoteiros = ({ names, bo, setListaDosNomes }) =>
  <LeadersList names={names} bo={bo} t1='Escoteiro Chefe da Tribo de Escoteiros' t2='Escoteiro Sub-Chefe Da Tribo de Escoteiros - ' setListaDosNomes={setListaDosNomes} />


export default TribodeEscoteiros;
