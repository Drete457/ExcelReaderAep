import { useState, useMemo } from 'react';

interface CopyAllButtonProps {
  names: string[];
}

const CopyAllButton: React.FC<CopyAllButtonProps> = ({ names }) => {
  const [copiedNames, setCopiedNames] = useState<string>('');

  // Memoize current names string for comparison
  const currentNames = useMemo(
    () =>
      names
        .filter(Boolean)
        .map(name => name.trim())
        .sort((a, b) => a.localeCompare(b, 'pt'))
        .join(', '),
    [names],
  );

  // Derive copied state by comparing current names with what was copied
  const copied = copiedNames === currentNames && copiedNames !== '';

  const handleCopyAll = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(currentNames);
      setCopiedNames(currentNames);
      // Auto-reset after 2 seconds
      setTimeout(() => setCopiedNames(''), 2000);
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
