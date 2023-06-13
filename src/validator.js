const validator = {
  isValid: function(creditCardNumber){
    const creditCardNumberReverse = creditCardNumber.split("").reverse();
    let valuePair = 0;
    let valueOdd = 0;
    let resultisValid = 0;
          
    for (let i = 0; i < creditCardNumberReverse.length; i++){
      let values = parseInt(creditCardNumberReverse[i]);
            
      if((i+1) % 2 === 0){
        values *= 2;
        if(values > 9){

          values -= 9;
        }
        valuePair += values; 
      
      } else {
        valueOdd += values;
      }     

    }

    const valueSum = valuePair + valueOdd;
    resultisValid = valueSum % 10 === 0;

    return resultisValid;   
  },

  maskify: function(creditCardNumber){
    const maskedNumber = [];
    const unMaskedNumber = [];
    for (let i = 0; i < creditCardNumber.length; i++){

      if(i < creditCardNumber.length - 4){
        maskedNumber.push("#");
      } else{
        unMaskedNumber.push(creditCardNumber[i]);          
      }

    }
    
    const resultMaskify = maskedNumber.join("") + unMaskedNumber.join("");

    return resultMaskify;
  }

};

export default validator;
