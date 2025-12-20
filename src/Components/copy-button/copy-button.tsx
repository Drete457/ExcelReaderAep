import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  ariaLabel?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, ariaLabel }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Auto-reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`botao-copiar ${
        copied ? 'botao-copiar-copiado' : 'botao-copiar-nao-copiado'
      }`}
      aria-label={ariaLabel || (copied ? 'Nome copiado' : 'Copiar nome')}
      aria-live="polite"
    >
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
};

export default CopyButton;
