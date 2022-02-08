import validator from './validator.js';

function getCardNumber(event) {
  event.preventDefault();

  const creditCardNumber = document.getElementById("number").value; 
  const verifyQuant = verify(creditCardNumber);

  if(!verifyQuant){
    alert("Quantidade de dígitos inválida(mínimo 13 e máximo 16)");
    return;
  } 

  const maskifyTheNumbers = validator.maskify(creditCardNumber);
  const isValid = validator.isValid(creditCardNumber);

  if(isValid) {
    document.getElementById("result").innerHTML = `O cartão ${maskifyTheNumbers} é válido para realizar compras online.`; 
  } else{
      document.getElementById("result").innerHTML = `O cartão ${maskifyTheNumbers} não é válido para realizar compras online.
      Entre em contato com a instituição financeira emissora do cartão para mais informações.`
    }
     
  document.getElementById("number").value='';
}
  
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
  
function tryAnotherNumber() {
  let creditCardNumber = document.getElementById("number"); 
  
  creditCardNumber.value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("reset").style.visibility = "hidden";
} 

document.getElementById("verify").addEventListener("click",getCardNumber);
document.getElementById("verify").addEventListener("click",showButtonReset);
document.getElementById("reset").addEventListener("click",tryAnotherNumber);
    
  