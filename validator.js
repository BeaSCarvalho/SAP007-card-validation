const CARD_SIZE = 16;

const validator = {
  
  isValid: function(creditCardNumber) {
    const arrayCreditCardNumber = creditCardNumber.split('', CARD_SIZE);                       
                       
    for(let numbers = 0; numbers < arrayCreditCardNumber.length; numbers++) {
      arrayCreditCardNumber[numbers] = parseInt(arrayCreditCardNumber[numbers]);    
    }
      
    const creditCardNumberReverse = arrayCreditCardNumber.reverse();                
      
    for (let i = 0; i < creditCardNumberReverse.length; i++) {                     
      if (i % 2 !== 0) {
        let double = creditCardNumberReverse[i] * 2;
        creditCardNumberReverse[i] = double;
       
        if (creditCardNumberReverse[i] > 9) {
          creditCardNumberReverse[i] -= 9;
        }
      }
    }
  
    let sumAllNumbers = 0;
                                                                      
    for (let i in creditCardNumberReverse) {                                    
      sumAllNumbers += (creditCardNumberReverse[i]);                             
    }

    return sumAllNumbers % 10 === 0; 
  },
  
  maskify: function(creditCardNumber) {                                         
    const arrayCreditCardNumber = creditCardNumber.split('', 16);                  
    const fourLastNumbers = arrayCreditCardNumber.slice(-4);                       
    const firstNumbers = arrayCreditCardNumber.slice(0,-4);                       
  
    for(let i = 0; i < firstNumbers.length; i++) {                                              
      firstNumbers[i] = "#";                                                      
    }

    const ocult = firstNumbers.concat(fourLastNumbers).toString();                 
    const transformString = ocult.replace(/,/g,"");                                
                                                                                  
    return transformString;                                                      
  }
};

export default validator;
