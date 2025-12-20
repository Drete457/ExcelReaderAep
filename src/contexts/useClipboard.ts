import { useContext } from 'react';
import { ClipboardContext, ClipboardContextType } from './ClipboardContext';

export const useClipboard = (): ClipboardContextType => {
  const context = useContext(ClipboardContext);
  if (!context) {
    throw new Error('useClipboard must be used within a ClipboardProvider');
  }
  return context;
};
