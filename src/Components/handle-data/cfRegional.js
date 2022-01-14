const cfRegionalData = (result) => {
  const cfRegional = [
    result[239],
    result[247],
    result[253],
    result[259],
    result[265],
    result[271],
    result[277],
    result[283],
  ];
  const cfBO = [
    result[246],
    result[252],
    result[258],
    result[264],
    result[270],
    result[276],
    result[282],
    result[288],
  ];
  const cfRData = [
    result[243],
    result[251],
    result[257],
    result[263],
    result[269],
    result[275],
    result[281],
    result[287],
  ];
  const mcr = [result[343], result[347], result[348]];

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
