import type {
  ExcelRow,
  Positions,
  NucleoData,
  ExcelCellValue,
} from '../../types';

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
