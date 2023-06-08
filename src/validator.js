const validator = {
  isValid: function(creditCardNumber){
    const creditCardNumberReverse = creditCardNumber.split("").reverse();
    //console.log(creditCardNumberReverse);
    let valuePair = 0;
    let valueOdd = 0;
    let result = 0;
    
       
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
    result = valueSum % 10 === 0;

    return result;
    //console.log(result);



    
    //return valueSum % 10 === 0;
    
    
  }

  /*

maskify: function (){

}
*/
  
};

export default validator;

//al final los dos se tienen que sumar y se tiene que validar
/* if{
  sum / 10 = entero (sum % 10 === 0) = True
   sum / 10 = decimal (sum % 10 !=== 0) = False
} */
    
// 1 2 3 4 5 6
// 0 1 2 3 4 5
