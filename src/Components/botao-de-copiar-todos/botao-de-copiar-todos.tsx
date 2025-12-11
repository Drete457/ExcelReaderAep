import { useEffect, useState } from 'react';

interface BotaoDeCopiarTodosProps {
  texto: string[];
}

const BotaoDeCopiarTodos: React.FC<BotaoDeCopiarTodosProps> = ({ texto }) => {
  const [copiado, setCopiado] = useState<boolean>(false);

  const copiar = (): void => {
    const nomesASeremCopiados = texto
      .filter(Boolean)
      .map(nome => nome.trim())
      .join(', ');

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
