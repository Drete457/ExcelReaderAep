import { useContext } from 'react';
import { ClipboardContext, ClipboardContextType } from './ClipboardContext';

/**
 * Hook for accessing clipboard state and operations.
 * Must be used within ClipboardProvider.
 *
 * Provides access to:
 * - `namesList`: Array of names currently in clipboard
 * - `totalNames`: Total count of names
 * - `setNamesList`: Update names list (supports functional updates)
 * - `setTotalNames`: Update total count
 * - `resetClipboard`: Reset both values to initial state
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { namesList, setNamesList } = useClipboard();
 *
 *   const addName = () => {
 *     setNamesList(prev => [...prev, 'New Name']);
 *   };
 *
 *   return <div>{namesList.length} names</div>;
 * }
 * ```
 *
 * @throws {Error} If used outside ClipboardProvider
 * @returns {ClipboardContextType} Clipboard state and setter functions
 */
const useClipboard = (): ClipboardContextType => {
  const context = useContext(ClipboardContext);
  if (!context) {
    throw new Error('useClipboard must be used within a ClipboardProvider');
  }
  return context;
};

export default useClipboard;
