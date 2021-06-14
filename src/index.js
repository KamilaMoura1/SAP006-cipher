import cipher from './cipher.js';

const btnCifrar = document.getElementById("btnCifrar");

    function criptarMensagem(){
        let deslocamento = Number(document.getElementById("deslocamento").value);
        let mensagem = document.getElementById("mensagem").value;
        const cifrando = cipher.encode(deslocamento, mensagem);
        document.getElementById("mensagem").value = cifrando;
    }

            btnCifrar.addEventListener("click", criptarMensagem);

const btnDecifrar = document.getElementById("btnDecifrar");

    function decifrarMensagem(){
        let deslocamento = Number(document.getElementById("deslocamento").value);
        let mensagem = document.getElementById("mensagem").value;
        const decifrando = cipher.decode(deslocamento, mensagem);
        document.getElementById("mensagem").value = decifrando;
    }

         btnDecifrar.addEventListener("click", decifrarMensagem);

