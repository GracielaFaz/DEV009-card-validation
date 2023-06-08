const validator = {
  isValid: function(creditCardNumber){
    const creditCardNumberReverse = creditCardNumber.split("").reverse();
    console.log(creditCardNumberReverse);
    let valueSum = 0;
    let resultado
       
    for (let i = 0; i < creditCardNumberReverse.length; i++){
      let pair = +creditCardNumberReverse[i];
            
      if((i+1) % 2 === 0){
        pair *= 2;
        if(pair > 9){
          pair -= 9;
        }
        valueSum += pair; 
      } else {
        valueSum += pair;
      }

           

      resultado = valueSum % 10 === 0;
            

    }

    //return resultado;
    console.log(resultado);



    
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
