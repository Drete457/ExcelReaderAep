const allbo = (result) => {
  const alcateiaBO = [
    result[37],
    result[42],
    result[47],
    result[52],
    result[57],
    result[62],
  ];
  const tesBO = [
    result[72],
    result[77],
    result[82],
    result[87],
    result[92],
    result[97],
  ];
  const texBO = [
    result[107],
    result[112],
    result[117],
    result[122],
    result[127],
    result[132],
  ];
  const claBO = [
    result[137],
    result[142],
    result[147],
    result[152],
    result[157],
    result[162],
  ];
  const groupBO = [result[12], result[17], result[22], result[27], result[32]];
  const othersBO = [
    result[167],
    result[172],
    result[177],
    result[182],
    result[187],
  ];

  return { alcateiaBO, tesBO, texBO, claBO, groupBO, othersBO };
};

export default allbo;
