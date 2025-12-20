import { useState } from 'react';

interface CopyAllButtonProps {
  names: string[];
}

const CopyAllButton: React.FC<CopyAllButtonProps> = ({ names }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyAll = async (): Promise<void> => {
    try {
      const namesToCopy = names
        .filter(Boolean)
        .map(name => name.trim())
        .join(', ');

      await navigator.clipboard.writeText(namesToCopy);
      setCopied(true);
      // Auto-reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy all names:', error);
    }
  };

  return (
    <button
      onClick={handleCopyAll}
      className={`botao-copiar-todos ${
        copied ? 'botao-copiar-copiado' : 'botao-copiar-nao-copiado'
      }`}
      aria-label={
        copied
          ? 'Todos os nomes copiados'
          : 'Copiar todos os nomes não selecionados'
      }
      aria-live="polite"
    >
      {copied
        ? 'Copiado todos os nomes não selecionados'
        : 'Copiar todos os nomes não selecionados'}
    </button>
  );
};

export default CopyAllButton;
