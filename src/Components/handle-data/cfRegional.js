const cfRegionalData = (result) => {
  const cfRegional = [
    result[229],
    result[237],
    result[243],
    result[249],
    result[255],
    result[261],
    result[267],
    result[273],
  ];
  const cfBO = [
    result[236],
    result[242],
    result[248],
    result[254],
    result[260],
    result[266],
    result[272],
    result[278],
  ];
  const cfRData = [
    result[233],
    result[241],
    result[247],
    result[253],
    result[259],
    result[265],
    result[271],
    result[277],
  ];

  return { cfRegional, cfBO, cfRData };
};

export default cfRegionalData;
