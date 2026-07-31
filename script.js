const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const helloKitty = {
    x: 100,
    y: 250,
    largura: 60,
    altura: 60,
    velocidadeY: 0,
    pulando: false
};

function teclaPressionada(evento){

    if(evento.key === " " && helloKitty.pulando === false){

        helloKitty.velocidadeY = -20;

        helloKitty.pulando = true;
    }
}

document.addEventListener("keydown", teclaPressionada);

function desenharHelloKitty(){

    ctx.fillStyle = "red";

    ctx.fillRect(
        helloKitty.x,
        helloKitty.y,
        helloKitty.largura,
        helloKitty.altura
    );

}

const gravidade = 1;
const chao = 350;

function desenhar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    helloKitty.y = helloKitty.y + helloKitty.velocidadeY;

    helloKitty.velocidadeY = helloKitty.velocidadeY + gravidade;

    if(helloKitty.y + helloKitty.altura >= chao){

    helloKitty.y = chao - helloKitty.altura;

    helloKitty.velocidadeY =  0;

    helloKitty.pulando = false;
}

    desenharHelloKitty();

    requestAnimationFrame(desenhar);

}
desenhar();