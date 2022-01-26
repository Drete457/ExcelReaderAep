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
    result[147],
    result[152],
    result[157],
    result[162],
    result[167],
    result[172],
  ];
  const groupBO = [result[12], result[17], result[22], result[27], result[32]];
  const othersBO = [
    result[177],
    result[182],
    result[187],
    result[192],
    result[197],
    result[202],
  ];

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
