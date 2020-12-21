const nData = (result) => {
     const ncf = [
         result[314],
         result[320],
         result[326],
    ];
    const nValidade = [
        result[318],
        result[324],
        result[330],
      
    ];
    const nBO = [
        result[319],
        result[325],
        result[331],
    ]
  
    return { ncf, nValidade, nBO };
  };
  
  export default nData;
  