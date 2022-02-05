import validator from './validator.js';

function getCardNumber(event) {
    event.preventDefault();

    let creditCardNumber = document.getElementById("number").value; 
    let verifyQuant = verify(creditCardNumber);

    if(!verifyQuant){
      alert("Quantidade de dígitos inválida(mínimo 13 e máximo 16)");
      return;
    } 

     let maskifyTheNumbers = validator.maskify(creditCardNumber);
     let isValid = validator.isValid(creditCardNumber);
     let resultMessage = "O cartão " + maskifyTheNumbers;
      if(isValid){
        resultMessage = `${resultMessage} " é válido para realizar compras online`; 
      } else{
        resultMessage = `${resultMessage} " não é válido para realizar compras online.
         Entre em contato com a instituição financeira emissora do cartão para mais informações.`
      }
      document.getElementById("result").innerHTML = resultMessage;
     
    document.getElementById("number").value='';
  }
  
  document.getElementById("verify").addEventListener("click",getCardNumber);
  
  function verify(creditCardNumber) {                                            //função para ter entre 13 e 16 dígitos
    let quantNumbers = creditCardNumber.length;                   
    return quantNumbers >= 13 && quantNumbers <= 16;
  }
  
  function showButtonReset() {
    let display = document.getElementById("reset").style.visibility;
  
    if (display == "none") {
     document.getElementById("reset").style.visibility = "hidden";
    } else{
     document.getElementById("reset").style.visibility = "visible";
    }
  
    document.getElementById("reset").style.visibility = "visible";
  }
  
  document.getElementById("verify").addEventListener("click",showButtonReset);
  
  function tryAnotherNumber() {
    let creditCardNumber = document.getElementById("number"); 
  
    creditCardNumber.value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("reset").style.visibility = "hidden";
  } 
  
  document.getElementById("reset").addEventListener("click",tryAnotherNumber);
    
  