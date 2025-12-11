import { useEffect, useState } from 'react';

interface BotaoDeCopiarProps {
  texto: string;
}

const BotaoDeCopiar: React.FC<BotaoDeCopiarProps> = ({ texto }) => {
  const [copiado, setCopiado] = useState<boolean>(false);

  const copiar = (): void => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
  };

  useEffect(() => {
    setCopiado(false);
  }, [texto]);

  return (
    <button
      onClick={copiar}
      className={`botao-copiar ${
        copiado ? 'botao-copiar-copiado' : 'botao-copiar-nao-copiado'
      }`}
    >
      {copiado ? 'Copiado' : 'Copiar'}
    </button>
  );
};

export default BotaoDeCopiar;
