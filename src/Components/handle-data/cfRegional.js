const cfRegionalData = (result) => {
  const cfRegional = [
    result[228],
    result[236],
    result[242],
    result[248],
    result[254],
    result[260],
    result[266],
    result[272],
  ];
  const cfBO = [
    result[235],
    result[241],
    result[247],
    result[253],
    result[259],
    result[265],
    result[271],
    result[277],
  ];
  const cfRData = [
    result[232],
    result[240],
    result[246],
    result[252],
    result[258],
    result[264],
    result[270],
    result[276],
  ];

  return { cfRegional, cfBO, cfRData };
};

export default cfRegionalData;
