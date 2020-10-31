const optionList = (list) => {
  let array = [];

  list.map((group) => {
    if (
      group[3] !== 'Suspenso' &&
      group[3] !== 'Inativo' &&
      group[3] !== 'Extinto'
    ) {
      array.push({
        value: group[0],
        label: `Grupo: ${group[0]} Região: ${group[1]}`,
      });
    }
    return undefined;
  });
  return array;
};

export default optionList;
