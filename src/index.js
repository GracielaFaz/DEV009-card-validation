import validator from './validator.js';

const btnValidate = document.getElementById("validate");
btnValidate.addEventListener("click",function(){
  const creditCardNumber = document.getElementById("inputNumber").value; 
  validator.isValid(creditCardNumber)
  validator.maskify(creditCardNumber)
});


console.log(validator);