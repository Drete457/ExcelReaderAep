const allbo = (result) => {
  const alcateiaBO = [
    result[37],
    result[42],
    result[47],
    result[52],
    result[57],
    result[62],
    result[67],
    result[72],
    result[77],
  ];
  const tesBO = [
    result[82],
    result[87],
    result[92],
    result[97],
    result[102],
    result[107],
    result[112],
  ];
  const texBO = [
    result[117],
    result[122],
    result[127],
    result[132],
    result[137],
    result[143],
  ];
  const claBO = [
    result[148],
    result[153],
    result[158],
    result[163],
    result[168],
    result[173],
  ];
  const groupBO = [result[12], result[17], result[22], result[27], result[32]];
  const othersBO = [
    result[178],
    result[183],
    result[188],
    result[193],
    result[198],
    result[203],
  ];

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
