const cipher = { 

  encode: function(offset, string) {

    if(string == "" || offset == "" ){
          alert("Algumas informações estão em falta")
    }

      let msgCifra = "";
      let offsetNumber = parseInt(offset);

      for (let i= 0; i <= string.length; i++){

        let codificar = string.charCodeAt(i);
        if(codificar >= 65 && codificar <= 90){
          
          msgCifra += String.fromCharCode((codificar - 65 + offsetNumber)%26 + 65);

        }
      }
      return msgCifra
      console.log(msgCifra)
  },

  decode: function(offset, string) {
    let msgDecifra = "";
    let offsetNumbe = parseInt(offset);

    if(string == "" || offset == "" ){
      alert("Algumas informações estão em falta")
}

    for (let i= 0; i <= string.length; i++){

      let decodificar = string.charCodeAt(i);
      if(decodificar >= 65 && decodificar<=90){

      msgDecifra += String.fromCharCode((decodificar - 90 - offsetNumbe) %26 + 90)
      }
    }
    return msgDecifra
    console.log(msgDecifra)
  }
  
  

};

export default cipher;

