import { useState, useCallback, useMemo } from 'react';
import type { ExcelRow } from '@/types';

/**
 * Return type for useGroupSelection hook.
 */
interface UseGroupSelectionReturn {
  /** Currently selected Excel row, or undefined if none selected */
  selectedLine: ExcelRow | undefined;
  /** Select a group by its value (first column of row) */
  selectGroup: (groupValue: string | number) => void;
  /** Clear the current selection */
  clearSelection: () => void;
}

/**
 * Hook for managing group selection state.
 * Handles selecting and clearing Excel row selections based on first column value.
 * 
 * @example
 * ```tsx
 * function GroupSelector({ rows }: { rows: ExcelRow[] }) {
 *   const { selectedLine, selectGroup, clearSelection } = useGroupSelection(rows);
 *   
 *   return (
 *     <div>
 *       <button onClick={() => selectGroup('Group A')}>Select A</button>
 *       {selectedLine && <div>Selected: {selectedLine[0]}</div>}
 *       <button onClick={clearSelection}>Clear</button>
 *     </div>
 *   );
 * }
 * ```
 * 
 * @param rows - Array of Excel rows to search within
 * @returns Object containing selected line and selection control functions
 */
export const useGroupSelection = (
  rows: ExcelRow[],
): UseGroupSelectionReturn => {
  const [selectedLine, setSelectedLine] = useState<ExcelRow | undefined>(
    undefined,
  );

  const selectGroup = useCallback(
    (groupValue: string | number) => {
      const foundLine = rows.find(row => {
        if (row && row[0]) {
          return row[0] === groupValue;
        }
        return false;
      });
      setSelectedLine(foundLine);
    },
    [rows],
  );

  const clearSelection = useCallback(() => {
    setSelectedLine(undefined);
  }, []);

  return useMemo(
    () => ({
      selectedLine,
      selectGroup,
      clearSelection,
    }),
    [selectedLine, selectGroup, clearSelection],
  );
};
