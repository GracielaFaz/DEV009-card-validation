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
      // Si el index es menor que el index de los últimos cuatro, enmascáralos y agregalos al array/constante maskCreditCardNumber
      if(i < creditCardNumber.length - 4){
        maskedNumber.push("#");
      } else{
        // Si no, agrega los valores del index al array/constante maskCreditCardNumber
        unMaskedNumber.push(creditCardNumber[i]);
          
      }

    }

    // junta los las dos variables para dar el numero enmascarado. Si creditCardNumber fuera 4556364607935616 el resultado debería de ser ############5616
    const resultMaskify = maskedNumber.join("") + unMaskedNumber.join("");

    return resultMaskify;
    

  }



};

export default validator;
