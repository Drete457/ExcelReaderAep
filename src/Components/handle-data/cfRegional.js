const cfRegionalData = (result) => {
  const cfRegional = [
    result[238],
    result[246],
    result[252],
    result[258],
    result[264],
    result[270],
    result[276],
    result[282],
  ];
  const cfBO = [
    result[245],
    result[251],
    result[257],
    result[263],
    result[269],
    result[275],
    result[281],
    result[287],
  ];
  const cfRData = [
    result[242],
    result[250],
    result[256],
    result[262],
    result[268],
    result[274],
    result[280],
    result[286],
  ];
  const mcr = [result[342], result[346], result[347]];

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
