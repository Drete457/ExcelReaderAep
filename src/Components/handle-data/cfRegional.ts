import type {
  ExcelRow,
  Positions,
  RegionalData,
  ExcelCellValue,
} from '../../types';

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
