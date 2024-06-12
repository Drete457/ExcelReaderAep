const allleaders = (result) => {
  const alcateiaNames = [
    result[37],
    result[43],
    result[49],
    result[55],
    result[61],
    result[67],
    result[73],
    result[79],
    result[85],
  ];
  const tesNames = [
    result[91],
    result[97],
    result[103],
    result[109],
    result[115],
    result[121],
    result[127],
    result[133],
  ];
  const texNames = [
    result[139],
    result[145],
    result[151],
    result[157],
    result[163],
    result[169],
  ];
  const claNames = [
    result[175],
    result[181],
    result[187],
    result[193],
    result[199],
    result[205]
  ];
  const groupNames = [
    result[4],
    result[13],
    result[19],
    result[25],
    result[31],
  ];
  const cgData = [result[5], result[9]];
  const othersNames = [
    result[211],
    result[217],
    result[223],
    result[229],
    result[235],
    result[241]
  ];

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
