import { createContext, useState, useCallback, ReactNode } from 'react';

/**
 * Context type for clipboard state management.
 * Provides centralized state for names list and total count across the application.
 */
export interface ClipboardContextType {
  /** Array of names in clipboard */
  namesList: string[];
  /** Total count of names */
  totalNames: number;
  /** Update names list. Supports direct array or functional update */
  setNamesList: (names: string[] | ((prev: string[]) => string[])) => void;
  /** Update total names count */
  setTotalNames: (total: number) => void;
  /** Reset clipboard to initial empty state */
  resetClipboard: () => void;
}

const ClipboardContext = createContext<ClipboardContextType | undefined>(
  undefined,
);

// Export only for the hook - not for general use
export { ClipboardContext };

/**
 * Props for ClipboardProvider component.
 */
interface ClipboardProviderProps {
  /** Child components that will have access to clipboard context */
  children: ReactNode;
}

/**
 * Provider component for clipboard state management.
 * Wraps application components to provide centralized clipboard state.
 * Eliminates prop drilling by making clipboard data accessible via useClipboard hook.
 * 
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ClipboardProvider>
 *       <YourComponents />
 *     </ClipboardProvider>
 *   );
 * }
 * ```
 * 
 * @param props - Provider properties
 * @returns Context provider with clipboard state
 */
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
