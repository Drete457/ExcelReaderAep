import { useEffect, useState } from 'react';

const BotaoDeCopiarTodos = ({ texto }) => {
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    const nomesASeremCopiados = texto.reduce(
      (acc, nome) => `${acc}${nome}, `,
      '',
    );

    navigator.clipboard.writeText(nomesASeremCopiados);
    setCopiado(true);
  };

  useEffect(() => {
    setCopiado(false);
  }, [texto]);

  return (
    <button
      onClick={copiar}
      className={`botao-copiar-todos ${
        copiado ? 'botao-copiar-copiado' : 'botao-copiar-nao-copiado'
      }`}
    >
      {copiado
        ? 'Copiado todos os nomes não selecionados'
        : 'Copiar todos os nomes não selecionados'}
    </button>
  );
};

export default BotaoDeCopiarTodos;
