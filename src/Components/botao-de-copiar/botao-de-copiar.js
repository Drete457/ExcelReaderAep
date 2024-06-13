import { useState } from "react";

const BotaoDeCopiar = ({ texto }) => {
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
  };

  return (
    <button
      onClick={copiar}
      className={`botao-copiar ${
        copiado ? "botao-copiar-copiado" : "botao-copiar-nao-copiado"
      }`}
    >
      {copiado ? "Copiado" : "Copiar"}
    </button>
  );
};

export default BotaoDeCopiar;
