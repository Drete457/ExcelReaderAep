const cfRegionalData = (result, positions) => {
  const cfRegional = [];
  const cfBO = [];
  const cfRData = [];
  const mcr = [result[403], result[407], result[408]];

  positions?.cfRegional?.forEach?.((element) => {
    cfRegional.push(result[element.namePosition]);
    cfBO.push(result[element.bo]);
    cfRData.push(result[element.validate]);
  });
  positions?.mcr?.forEach?.((element) => {
    mcr.push(result[element.namePosition]);
    mcr.push(result[element.bo]);
    mcr.push(result[element.validate]);
  });

  return { cfRegional, cfBO, cfRData, mcr };
};

export default cfRegionalData;
