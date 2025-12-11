import type { ExcelRow, Positions, BOData, ExcelCellValue } from '../../types';

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
