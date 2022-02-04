import validator from './validator.js';

function getCardNumber(event) {

    event.preventDefault();
    let creditCardNumber = document.getElementById("number").value; 
  
    let verifyQuant = verify(creditCardNumber);
    if(verifyQuant == false){
      alert("Quantidade de dígitos inválida(mínimo 13 e máximo 16)");
    }
  
    else{
     let maskifyTheNumbers = validator.maskify(creditCardNumber);
  
     let isValid = validator.isValid(creditCardNumber);
      if(isValid){
       document.getElementById("result").innerHTML = "O cartão " + maskifyTheNumbers + " é válido para realizar compras online."; 
      } 
      else{
      document.getElementById("result").innerHTML = "O cartão " + maskifyTheNumbers + " não é válido para realizar compras online. Entre em contato com a instituição financeira emissora do cartão para mais informações.";
      }
    }  
    document.getElementById("number").value='';
  
    return creditCardNumber;
  }
  
  document.getElementById("verify").addEventListener("click",getCardNumber);
  
  function verify(creditCardNumber) {                                            //função para ter entre 13 e 16 dígitos
  
    let quantNumbers = creditCardNumber.length;                   
    if(quantNumbers < 13) {
      return false;
    }
    else if(quantNumbers > 16) {
      return false;
    }  
  }
  
  function showButtonReset() {
  
    let display = document.getElementById("reset").style.visibility;
  
    if (display == "none") {
     document.getElementById("reset").style.visibility = "hidden";
    }
    else {
     document.getElementById("reset").style.visibility = "visible";
    }
  
    document.getElementById("reset").style.visibility = "visible";
  
    return showButtonReset;
  }
  
  document.getElementById("verify").addEventListener("click",showButtonReset);
  
  
  function tryAnotherNumber() {
    let creditCardNumber = document.getElementById("number"); 
  
    creditCardNumber.value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("reset").style.visibility = "hidden";
  
    return tryAnotherNumber;
  } 
  
  document.getElementById("reset").addEventListener("click",tryAnotherNumber);
    
  