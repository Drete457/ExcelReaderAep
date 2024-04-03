const nData = (result) => {
    const ncf = [
        result[376],
        result[383],
        result[390],
    ];
    const nValidade = [
        result[380],
        result[387],
        result[394],

    ];
    const nBO = [
        result[381],
        result[388],
        result[395],
    ]

    return { ncf, nValidade, nBO };
};

export default nData;
