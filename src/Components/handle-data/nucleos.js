const nData = (result) => {
     const ncf = [
         result[325],
         result[331],
         result[337],
    ];
    const nValidade = [
        result[329],
        result[335],
        result[341],
      
    ];
    const nBO = [
        result[330],
        result[336],
        result[342],
    ]
  
    return { ncf, nValidade, nBO };
  };
  
  export default nData;
  