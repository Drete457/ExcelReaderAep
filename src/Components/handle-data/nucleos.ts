import type { ExcelRow, Positions, NucleoData, ExcelCellValue } from '@/types';

/**
 * Extracts núcleo (nucleus) data from Excel row.
 * Collects nucleus chief names, validation dates, and BO numbers.
 *
 * @param result - Excel row containing nucleus data
 * @param positions - Position mappings with column indices
 * @returns Object containing nucleus chief, validity, and BO arrays
 *
 * @example
 * ```tsx
 * const nucleus = nData(selectedRow, positions);
 * console.log(nucleus.ncf);       // ['Chief Name', ...]
 * console.log(nucleus.nValidade); // ['2024-12-31', ...]
 * console.log(nucleus.nBO);       // [12345, ...]
 * ```
 */
const nData = (result: ExcelRow, positions: Positions): NucleoData => {
  const ncf: ExcelCellValue[] = [];
  const nValidade: ExcelCellValue[] = [];
  const nBO: ExcelCellValue[] = [];

  positions?.nucle?.forEach?.(element => {
    ncf.push(result[element.namePosition]);
    nBO.push(result[element.bo]);
    nValidade.push(result[element.validate]);
  });

  return { ncf, nValidade, nBO };
};

export default nData;
