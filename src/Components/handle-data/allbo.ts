import type { ExcelRow, Positions, BOData, ExcelCellValue } from '@/types';

/**
 * Extracts BO (Boletim de Ocorrências) data for all group sections.
 * Collects BO values from positions mapping for each section type.
 *
 * @param result - Excel row containing group data
 * @param position - Position mappings with column indices
 * @returns Object containing BO arrays for each section
 *
 * @example
 * ```tsx
 * const boData = allbo(selectedRow, positions);
 * console.log(boData.alcateiaBO); // [12345, 67890, ...]
 * ```
 */
const allbo = (result: ExcelRow, position: Positions): BOData => {
  const alcateiaBO: ExcelCellValue[] = [];
  const tesBO: ExcelCellValue[] = [];
  const texBO: ExcelCellValue[] = [];
  const claBO: ExcelCellValue[] = [];
  const groupBO: ExcelCellValue[] = [];
  const othersBO: ExcelCellValue[] = [];

  position?.alcateia?.forEach?.(element => {
    alcateiaBO.push(result[element.bo]);
  });
  position?.tes?.forEach?.(element => {
    tesBO.push(result[element.bo]);
  });
  position?.tex?.forEach?.(element => {
    texBO.push(result[element.bo]);
  });
  position?.cla?.forEach?.(element => {
    claBO.push(result[element.bo]);
  });
  position?.group?.forEach?.(element => {
    groupBO.push(result[element.bo]);
  });
  position?.others?.forEach?.(element => {
    othersBO.push(result[element.bo]);
  });

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
