let listaDeNumerosAletorio =[];
let numeroLimite = 10;
let numeroAleatorio = geraNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female',{rate:1.2});
}

function mesagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela ('p','escolha um número entre 1 e 10');
}

mesagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
  
    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1','acertou!');
        let palavratetativa =tentativas > 1 ? 'tentativas': 'tentativa'
        let mensagemtentativas =`vc acertou no numero secreto com ${tentativas} ${palavratetativa}`;
        exibirTextoNaTela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p','o numero é menor que o chute');
        }else{
            exibirTextoNaTela('p','o numero é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }
};

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
    let quantidadeDeElementosNaLista= listaDeNumerosAletorio.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosAletorio = [];
    }

    if(listaDeNumerosAletorio.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumerosAletorio.push(numeroEscolhido);
        console.log(listaDeNumerosAletorio)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    mesagemInicial ()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
