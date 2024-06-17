const allleaders = (result, position) => {
  const alcateiaNames = [];
  const tesNames = [];
  const texNames = [];
  const claNames = [];
  const groupNames = [];
  const othersNames = [];
  const cgData = [];

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
