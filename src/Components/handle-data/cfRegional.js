const cfRegionalData = (result) => {
  const cfRegional = [
    result[282],
    result[291],
    result[298],
    result[305],
    result[312],
    result[319],
    result[326],
    result[333],
    result[340],
    result[347],
    result[354],
    result[361],
    result[368],
    result[375],
  ];
  const cfBO = [
    result[289],
    result[296],
    result[303],
    result[310],
    result[317],
    result[324],
    result[331],
    result[338],
    result[345],
    result[352],
    result[359],
    result[366],
    result[373],
    result[380],
  ];
  const cfRData = [
    result[286],
    result[295],
    result[302],
    result[309],
    result[316],
    result[323],
    result[330],
    result[337],
    result[344],
    result[351],
    result[358],
    result[365],
    result[372],
    result[379],
  ];
  const mcr = [result[403], result[407], result[408]];

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
