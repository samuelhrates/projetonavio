//variavel do nosso jogo
var sea,ship;
var seaImg,shipImg;
//na funsão preload carrega imagems
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

//criando Sprites do navio e colocando a imagem em movimento
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  //velocidade do chão
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  //deshenha os Sprites do navio do chão,etc

  drawSprites();
}
