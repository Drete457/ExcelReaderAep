const optionList = (list) => {
  let array = [];

  list.map((data) => {
    if (
      data[3] &&
      data[3] !== 'Suspenso' &&
      data[3] !== 'Inativo' &&
      data[3] !== 'Extinto'
    ) {
      if (
        typeof data[0] === 'string' &&
        (data[0] === 'ENFIM' ||
          data[0] === 'Chefia Nacional' ||
          data[0] === 'MCN')
      ) {
        return undefined;
      }
      if (isNaN(data[0])) {
          if (data[0].includes('Núcleo')) {
            array.push({
              value: data[0],
              label: data[0],
            })
          } else {
            array.push({
            value: data[0],
            label: `Chefia Regional: ${data[0]}`,
        });
      }
      } else {
        array.push({
          value: data[0],
          label: `Grupo: ${data[0]} Região: ${data[1]}`,
        });
      }
    }

    return undefined;
  });
  
  return array;
};

export default optionList;
