const nData = (result, positions) => {
  const ncf = [];
  const nValidade = [];
  const nBO = [];

  positions?.nucle?.forEach?.((element) => {
    ncf.push(result[element.namePosition]);
    nBO.push(result[element.bo]);
    nValidade.push(result[element.validate]);
  });

  return { ncf, nValidade, nBO };
};

export default nData;
