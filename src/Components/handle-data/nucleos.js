const nData = (result) => {
    const ncf = [
        result[382],
        result[389],
        result[396],
    ];
    const nValidade = [
        result[386],
        result[393],
        result[400],

    ];
    const nBO = [
        result[387],
        result[394],
        result[401],
    ]

    return { ncf, nValidade, nBO };
};

export default nData;
