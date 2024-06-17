import LeadersList from '../../helpers/LeadersList';

const RestoDaChefia = ({ names, bo, setListaDosNomes }) => (
  <LeadersList
    names={names}
    bo={bo}
    t1="Escoteiro Chefe Dos Serviços Admin."
    t2="Escoteiro Chefe Adj da CG - "
    setListaDosNomes={setListaDosNomes}
  />
);

export default RestoDaChefia;
