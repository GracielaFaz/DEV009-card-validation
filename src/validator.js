const validator = {

    
    isValid: function(creditCardNumber){
        let creditCardNumberReverse = creditCardNumber.split("").reverse();
        console.log(creditCardNumberReverse);
       /* let reverseLength = creditCardNumberReverse.length;
        console.log(reverseLength)*/

        for (let i = 0; i < creditCardNumberReverse.length; i++){
           if((i+2) % 2 !== 0){
            //se tienen que multiplicar * 2 y si el resultado es un numero de dos digitos se tienen que sumar esos dos digitos (ej. si es 13 = 1+3 = 4)
            console.log(i);
    
           } else{
            // sumar "impares"
           }

           // sumar "pares"
         
           
        }

        //al final los dos se tienen que sumar y se tiene que validar
        /* if{
            sum / 10 = entero (sum % 10 === 0) = True
            sum / 10 = decimal (sum % 10 !=== 0) = False
        } */

        // 1 2 3 4 5 6
        // 0 1 2 3 4 5

    }
    
    
/*

maskify: function (){

}
*/
  
};

export default validator;
