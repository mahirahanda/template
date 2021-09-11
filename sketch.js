var astronaut,bath,brush,drink,eat,gym,iss,move,sleep,bg;
var astronautImg,bathImg,brushImg,drinkImg,eatImg,gymImg,issImg,moveImg,sleepImg,bgImg;
function preload(){
  
  bathImg= loadAnimation ("./images/bath1.png","./images/bath2.png")
  brushImg= loadImage("./images/brush.png")
  drinkImg=loadAnimation("./images/drink1.png","./images/drink2.png")
  eatImg=loadAnimation("./images/eat1.png","./images/eat2.png")
  gymImg=loadAnimation("./images/gym1.png","./images/gym2.png","./images/gym11.png","./images/gym12.png")
  bgImg=loadImage("./images/iss.png")
  moveImg=loadAnimation("./images/move.png","./images/move2.png")
  sleepImg=loadImage("./images/sleep.png")
}
function setup() {
  createCanvas(400, 400);
  bg=createSprite(400,400)
  bg.addImage("bg", bgImg)
  
  astronaut=createSprite(300,320,20,30)
  astronaut.addAnimation("sleep", sleepImg)
  astronaut.scale=0.1
  
}

function draw() {
  background(220);
  edges= createEdgeSprites();
  astronaut.collide(edges);

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brushImg)
    astronaut.changeAnimation("brush")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAanimation("gym",gymImg)
    astronaut.changeAnimation("gym")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAanimation("bath",bathImg)
    astronaut.changeAnimation("brush")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAanimation("eat",eatImg)
    astronaut.changeAnimation("eat")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if (keyDown("M")){
    astronaut.addAanimation("move",moveImg)
    astronaut.changeAnimation("move")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  drawSprites();
}