import type { ExcelRow, Positions, LeaderData, ExcelCellValue } from '@/types';

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
