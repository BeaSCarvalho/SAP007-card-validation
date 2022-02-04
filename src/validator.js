const validator = {
  
    isValid: function(creditCardNumber) {
  
     let arrayCreditCardNumber = creditCardNumber.split('', 16);                     //transformando o número digitado em um array
      for(let numbers = 0; numbers < arrayCreditCardNumber.length; numbers++) {
       arrayCreditCardNumber[numbers] = parseInt(arrayCreditCardNumber[numbers]);    //array só de números(parseInt)
      }
      
      let creditCardNumberReverse = arrayCreditCardNumber.reverse();                 //invertendo a posição dos dígitos
      
      for (let i = 0; i < creditCardNumberReverse.length; i++) {                     //loop com todos os elementos
  
        if (i % 2 !== 0) {
         let double = creditCardNumberReverse[i] * 2;
         creditCardNumberReverse[i] = double;
  
          if (creditCardNumberReverse[i] > 9) {
           creditCardNumberReverse[i] -= 9;
          }
        }
      }
  
      let sumAllNumbers = 0;
                                                                      
      for (let i in creditCardNumberReverse) {                                    //laço for...in: i é uma key de acesso ao array
       sumAllNumbers += (creditCardNumberReverse[i]);                             //soma de todos os dígitos
      }
  
     return sumAllNumbers % 10 === 0; 
    },
  
    maskify: function(creditCardNumber) {                                         //mascarar os numeros menos os 4 ultimos
  
     let arrayCreditCardNumber = creditCardNumber.split('', 16);                  //transforma em array
  
     let fourLastNumbers = arrayCreditCardNumber.slice(-4);                       //variável com os quatro ultimos digitos
     let firstNumbers = arrayCreditCardNumber.slice(0,-4);                        //variável com os demais dígitos
  
     for(let i = 0; i < firstNumbers.length; i++) {                               //loop em que todos os dígitos de firstNumbers                
      firstNumbers[i] = "#";                                                      //serão substituídos por #
     }
     let ocult = firstNumbers.concat(fourLastNumbers).toString();                 //juntar os dois arrays e depois transforma em string
     let transformString = ocult.replace(/,/g,"");   
     
  
  
  
     
     //mesmo depois de transformado em string as virgulas continuam
     //let separateNumbers = transformString.replace(/(\d{4}) (\d{4}) (\d{4}) (\d{4})/,"$1 /$2/ $3 $4 ");
                                                                                  
     return transformString;                                                      //replace tira todas as vírgulas(global - g)(/) 
    }
  };
  
export default validator;
