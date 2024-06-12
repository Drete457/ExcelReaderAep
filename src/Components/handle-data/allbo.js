const allbo = (result) => {
  const alcateiaBO = [
    result[41],
    result[47],
    result[53],
    result[59],
    result[65],
    result[71],
    result[77],
    result[83],
    result[89],
  ];
  const tesBO = [
    result[95],
    result[101],
    result[107],
    result[113],
    result[119],
    result[125],
    result[131],
    result[137],
  ];
  const texBO = [
    result[143],
    result[149],
    result[155],
    result[161],
    result[167],
    result[173],
  ];
  const claBO = [
    result[179],
    result[185],
    result[191],
    result[197],
    result[203],
    result[209],
  ];
  const groupBO = [result[12], result[17], result[23], result[29], result[35]];
  const othersBO = [
    result[215],
    result[221],
    result[227],
    result[233],
    result[239],
    result[245],
  ];

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
