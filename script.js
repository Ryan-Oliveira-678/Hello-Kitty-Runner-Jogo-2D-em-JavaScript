const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const gravidade = 1;
const chao = 350;

const helloKitty = {
    x: 100,
    y: 250,
    largura: 60,
    altura: 60,
    velocidadeY: 0,
    pulando: false
};

const obstaculos = {
    x: 900,
    y: 300,
    largura: 40,
    altura: 50,
    velocidade: 5
}; 

function teclaPressionada(evento){

    if(evento.key === " " && helloKitty.pulando === false){

        helloKitty.velocidadeY = -20;
        helloKitty.pulando = true;
        gameOver = false;
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

function desenharObstaculos(){

    ctx.fillStyle = "gray";

    ctx.fillRect(

    obstaculos.x,
    obstaculos.y,
    obstaculos.largura,
    obstaculos.altura
    );
}



function desenharChao(){

    ctx.fillStyle = "green";

    ctx.fillRect(
        0,
        chao,
        canvas.width,
        canvas.height - chao
    );
}

function desenenharGameOver(){
    ctx.fillStyle = "black";
    ctx.fillAlign = "center";
    ctx.fillFont = "40px Arial";
    ctx.fillText(
        "Game Over",
        canvas.width / 2,
        180
    );
}

let gameOver = false;

function desenhar(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(gameOver === false){
    obstaculos.x = obstaculos.x - obstaculos.velocidade;
}
    
    if(obstaculos.x + obstaculos.largura <  0){
        obstaculos.x = canvas.width + Math.random() * 500 ; 
    }

    if(helloKitty.x < obstaculos.x + obstaculos.largura && helloKitty.x + helloKitty.largura > obstaculos.x && helloKitty.y < obstaculos.y + obstaculos.altura && helloKitty.y + helloKitty.altura > obstaculos.y
    && gameOver === false
    ){
        gameOver = true;
        console.log("Colisão");

    }

    helloKitty.y = helloKitty.y + helloKitty.velocidadeY;

    helloKitty.velocidadeY = helloKitty.velocidadeY + gravidade;

    if(helloKitty.y + helloKitty.altura >= chao){

    helloKitty.y = chao - helloKitty.altura;

    helloKitty.velocidadeY =  0;

    helloKitty.pulando = false;
}
    desenharChao();
    desenharObstaculos();
    desenharHelloKitty();

    if(gameOver === true){
        desenenharGameOver();
    }

    requestAnimationFrame(desenhar);

}
desenhar();