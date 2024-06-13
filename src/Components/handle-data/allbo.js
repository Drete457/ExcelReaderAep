const allbo = (result, position) => {
  const alcateiaBO = [];
  const tesBO = [];
  const texBO = [];
  const claBO = [];
  const groupBO = [];
  const othersBO = [];

  position?.alcateia?.forEach?.((element) => {
    alcateiaBO.push(result[element.bo]);
  });
  position?.tes?.forEach?.((element) => {
    tesBO.push(result[element.bo]);
  });
  position?.tex?.forEach?.((element) => {
    texBO.push(result[element.bo]);
  });
  position?.cla?.forEach?.((element) => {
    claBO.push(result[element.bo]);
  });
  position?.group?.forEach?.((element) => {
    groupBO.push(result[element.bo]);
  });
  position?.others?.forEach?.((element) => {
    othersBO.push(result[element.bo]);
  });

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
