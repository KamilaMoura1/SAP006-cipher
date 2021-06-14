const cipher = { 

encode: function(offset, string) {
  
  let msgCifra = "";
  let offsetNumber = parseInt(offset);

    if(string == "" || offset == "" || string == null || offset == null){
  
      throw new TypeError("Algumas informações estão em falta");
    }
  
    for (let i= 0; i <= string.length; i++){
  
    let codificar = string.charCodeAt(i);    
  
    if(codificar >= 65 && codificar <= 90){    
    
        msgCifra += String.fromCharCode((codificar - 65 + offsetNumber) %26 + 65);
    
    } else if(codificar>= 97 && codificar <= 122){ 
    
      msgCifra += String.fromCharCode((codificar - 97 + offsetNumber) %26 + 97)
    } else if (string.charCodeAt(i) == 32){
    
      msgCifra += string.charAt(i)
    }
    
  }
    
  return msgCifra 
    },

decode: function(offset, string) {
    
  let msgDecifra = "";
  let offsetNumbe = parseInt(offset);

    if(string == "" || offset == "" || string == null || offset == null){
      throw new TypeError("Algumas informações estão em falta");
    }

  for (let i= 0; i <= string.length; i++){

    let decodificar = string.charCodeAt(i);
      
    if(decodificar >= 65 && decodificar<=90){
      msgDecifra += String.fromCharCode((decodificar - 90 - offsetNumbe) %26 + 90);
    } else if(decodificar >= 97 && decodificar <= 122){ 
        msgDecifra += String.fromCharCode((decodificar - 122 - offsetNumbe) %26 + 122);
    } else if (string.charCodeAt(i) == 32){
        msgDecifra += string.charAt(i);
    }
    }
    return msgDecifra
    
  }    
  };

export default cipher;

