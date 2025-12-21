import type { ExcelRow, SelectOption } from '@/types';

const optionList = (list: ExcelRow[]): SelectOption[] => {
  const array: SelectOption[] = [];
  const seen = new Set<string>();

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
          const key = String(firstCell);
          if (!seen.has(key)) {
            seen.add(key);
            array.push({
              value: firstCell,
              label: firstCell,
            });
          }
        } else {
          const key = String(firstCell);
          if (!seen.has(key)) {
            seen.add(key);
            array.push({
              value: firstCell,
              label: `Chefia Regional: ${firstCell}`,
            });
          }
        }
      } else if (firstCell !== null && firstCell !== undefined) {
        const key = String(firstCell);
        if (!seen.has(key)) {
          seen.add(key);
          array.push({
            value: firstCell as string | number,
            label: `Grupo: ${firstCell} Região: ${data[1]}`,
          });
        }
      }
    }
  });

  // Preserve the original file order while ensuring uniqueness.
  return array;
};

export default optionList;
