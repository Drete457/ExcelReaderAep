import { useState, useCallback, useMemo } from 'react';
import type { ExcelRow } from '@/types';

interface UseGroupSelectionReturn {
  selectedLine: ExcelRow | undefined;
  selectGroup: (groupValue: string | number) => void;
  clearSelection: () => void;
}

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
