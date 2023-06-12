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

function shipping () {
  let standardShipping = document.getElementById("standard-shipping")
  let expressShipping = document.getElementById("express-shipping")
  let spanShipping = document.getElementById("shipping-type")

  if(standardShipping.checked){
    spanShipping.innerHTML = "Standard Shipping (5 - 10 business days) $60.00"
  } else if(expressShipping.checked) {
    spanShipping.innerHTML = "Express Shipping (2 - 5 business days) $180.00"
  } else{
    alert("Select a shipping method")
  }
    
}



console.log(validator);