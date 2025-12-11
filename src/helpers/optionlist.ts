import type { ExcelRow, SelectOption } from '@/types';

const optionList = (list: ExcelRow[]): SelectOption[] => {
  const array: SelectOption[] = [];

  list.forEach(data => {
    if (
      data[3] &&
      data[3] !== 'Suspenso' &&
      data[3] !== 'Inativo' &&
      data[3] !== 'Extinto'
    ) {
      const firstCell = data[0];

      if (
        typeof firstCell === 'string' &&
        (firstCell === 'ENFIM' ||
          firstCell === 'Chefia Nacional' ||
          firstCell === 'MCN')
      ) {
        return;
      }

      if (typeof firstCell === 'string' && isNaN(Number(firstCell))) {
        if (firstCell.includes('Núcleo')) {
          array.push({
            value: firstCell,
            label: firstCell,
          });
        } else {
          array.push({
            value: firstCell,
            label: `Chefia Regional: ${firstCell}`,
          });
        }
      } else if (firstCell !== null && firstCell !== undefined) {
        array.push({
          value: firstCell as string | number,
          label: `Grupo: ${firstCell} Região: ${data[1]}`,
        });
      }
    }
  });

  return array;
};

export default optionList;
