import validator from './validator.js';

const btnValidate = document.getElementById("validate");
btnValidate.addEventListener("click",function(){
  const creditCardNumber = document.getElementById("inputNumber").value; 
  validator.isValid(creditCardNumber)
  validator.maskify(creditCardNumber)

  if( validator.isValid(creditCardNumber) === false | creditCardNumber == 0){
    alert("Invalid card, try again");
  } else{
    alert("Your payment with the card " + validator.maskify(creditCardNumber) + " was successful");
  }
});


console.log(validator);