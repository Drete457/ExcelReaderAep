const cfRegionalData = (result) => {
  const cfRegional = [
    result[276],
    result[285],
    result[292],
    result[299],
    result[306],
    result[313],
    result[320],
    result[327],
    result[334],
    result[341],
    result[348],
    result[355],
    result[362],
    result[369],
  ];
  const cfBO = [
    result[283],
    result[290],
    result[297],
    result[304],
    result[311],
    result[318],
    result[325],
    result[332],
    result[339],
    result[346],
    result[353],
    result[360],
    result[367],
    result[374],
  ];
  const cfRData = [
    result[280],
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
  ];
  const mcr = [result[397], result[401], result[402]];

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
