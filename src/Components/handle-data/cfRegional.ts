import type {
  ExcelRow,
  Positions,
  RegionalData,
  ExcelCellValue,
} from '@/types';

/**
 * Extracts regional council (Conselho Fiscal Regional) data from Excel row.
 * Collects names, BO numbers, validation data, and MCR (Mesa do Conselho Regional) data.
 *
 * @param result - Excel row containing regional data
 * @param positions - Position mappings with column indices
 * @returns Object containing regional council arrays and MCR data
 *
 * @example
 * ```tsx
 * const regional = cfRegionalData(selectedRow, positions);
 * console.log(regional.cfRegional); // ['Name 1', 'Name 2', ...]
 * console.log(regional.mcr);        // [cell403, cell407, cell408, ...]
 * ```
 */
const cfRegionalData = (
  result: ExcelRow,
  positions: Positions,
): RegionalData => {
  const cfRegional: ExcelCellValue[] = [];
  const cfBO: ExcelCellValue[] = [];
  const cfRData: ExcelCellValue[] = [];
  const mcr: ExcelCellValue[] = [result[403], result[407], result[408]];

  positions?.cfRegional?.forEach?.(element => {
    cfRegional.push(result[element.namePosition]);
    cfBO.push(result[element.bo]);
    cfRData.push(result[element.validate]);
  });
  positions?.mcr?.forEach?.(element => {
    mcr.push(result[element.namePosition]);
    mcr.push(result[element.bo]);
    mcr.push(result[element.validate]);
  });

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
