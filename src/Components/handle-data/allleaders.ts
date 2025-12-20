import type { ExcelRow, Positions, LeaderData, ExcelCellValue } from '@/types';

/**
 * Extracts leader names and group council data from Excel row.
 * Collects names from positions mapping for all sections plus council data.
 *
 * @param result - Excel row containing group data
 * @param position - Position mappings with column indices
 * @returns Object containing name arrays for each section and council data
 *
 * @example
 * ```tsx
 * const leaders = allleaders(selectedRow, positions);
 * console.log(leaders.alcateiaNames); // ['John Doe', 'Jane Smith', ...]
 * console.log(leaders.cgData);        // ['2024', 'Valid', ...]
 * ```
 */
const allleaders = (result: ExcelRow, position: Positions): LeaderData => {
  const alcateiaNames: ExcelCellValue[] = [];
  const tesNames: ExcelCellValue[] = [];
  const texNames: ExcelCellValue[] = [];
  const claNames: ExcelCellValue[] = [];
  const groupNames: ExcelCellValue[] = [];
  const othersNames: ExcelCellValue[] = [];
  const cgData: ExcelCellValue[] = [];

  position?.alcateia?.forEach?.(element => {
    alcateiaNames.push(result[element.namePosition]);
  });
  position?.tes?.forEach?.(element => {
    tesNames.push(result[element.namePosition]);
  });
  position?.tex?.forEach?.(element => {
    texNames.push(result[element.namePosition]);
  });
  position?.cla?.forEach?.(element => {
    claNames.push(result[element.namePosition]);
  });
  position?.group?.forEach?.(element => {
    groupNames.push(result[element.namePosition]);
  });
  position?.others?.forEach?.(element => {
    othersNames.push(result[element.namePosition]);
  });
  position?.cgData?.forEach?.(element => {
    cgData.push(result[element.mandate]);
    cgData.push(result[element.validate]);
  });

  return {
    alcateiaNames,
    tesNames,
    texNames,
    claNames,
    groupNames,
    othersNames,
    cgData,
  };
};

export default allleaders;
