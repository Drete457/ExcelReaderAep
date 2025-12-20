import { createContext, useState, useCallback, ReactNode } from 'react';

export interface ClipboardContextType {
  namesList: string[];
  totalNames: number;
  setNamesList: (names: string[]) => void;
  setTotalNames: (total: number) => void;
  resetClipboard: () => void;
}

const ClipboardContext = createContext<ClipboardContextType | undefined>(
  undefined,
);

// Export only for the hook - not for general use
export { ClipboardContext };

interface ClipboardProviderProps {
  children: ReactNode;
}

export const ClipboardProvider: React.FC<ClipboardProviderProps> = ({
  children,
}) => {
  const [namesList, setNamesList] = useState<string[]>([]);
  const [totalNames, setTotalNames] = useState<number>(0);

  const resetClipboard = useCallback(() => {
    setNamesList([]);
    setTotalNames(0);
  }, []);

  const value: ClipboardContextType = {
    namesList,
    totalNames,
    setNamesList,
    setTotalNames,
    resetClipboard,
  };

  return (
    <ClipboardContext.Provider value={value}>
      {children}
    </ClipboardContext.Provider>
  );
};
