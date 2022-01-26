const allleaders = (result) => {
  const alcateiaNames = [
    result[33],
    result[38],
    result[43],
    result[48],
    result[53],
    result[58],
    result[63],
    result[68],
    result[73],
  ];
  const tesNames = [
    result[78],
    result[83],
    result[88],
    result[93],
    result[98],
    result[103],
    result[108],
  ];
  const texNames = [
    result[113],
    result[118],
    result[123],
    result[128],
    result[133],
    result[138],
  ];
  const claNames = [
    result[143],
    result[148],
    result[153],
    result[158],
    result[163],
    result[168],
  ];
  const groupNames = [
    result[4],
    result[13],
    result[18],
    result[23],
    result[28],
  ];
  const cgData = [result[5], result[9]];
  const othersNames = [
    result[173],
    result[178],
    result[183],
    result[188],
    result[193],
    result[198],
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
