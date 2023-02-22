const nData = (result) => {
    const ncf = [
        result[324],
        result[330],
        result[336],
    ];
    const nValidade = [
        result[328],
        result[334],
        result[340],

    ];
    const nBO = [
        result[329],
        result[334],
        result[341],
    ]

    return { ncf, nValidade, nBO };
};

export default nData;
