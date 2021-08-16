var ship, ship_sailing;
function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
groundImage=loadImage("sea.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(0,0,windowWidth,windowHeight)
  ground.addImage(groundImage)
  ground.scale=1
  ship=createSprite(800,200,51,50)
  ship.addAnimation("ship_sailing",ship_sailing)
  ship.scale=0.1
}

function draw() {
  background("white");
  ground.velocityX=-5
  if(ground.x<500){
    ground.x=windowWidth/2
  }
  drawSprites()
}