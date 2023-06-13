import validator from './validator.js';

const btnValidate = document.getElementById("validate");
btnValidate.addEventListener("click",function(){
  const creditCardNumber = document.getElementById("inputNumber").value; 
  const dialog = document.querySelector("dialog");
  validator.isValid(creditCardNumber);
  validator.maskify(creditCardNumber);
  dialog.showModal();

  if(validator.isValid(creditCardNumber) !== true || creditCardNumber === ""){
    document.getElementById("message").innerHTML = "Invalid card, try again";
  } else{
    document.getElementById("message").innerHTML = "Your payment with the card " + validator.maskify(creditCardNumber) + " was successful!";
    
  }
});

const btnClose = document.getElementById("close");
btnClose.addEventListener("click", function(){
  const dialog = document.querySelector("dialog");
  dialog.close();
}
);

console.log(validator);