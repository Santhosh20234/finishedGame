/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;*/
var background_image, background;
var snake, snakeImage;
var gameState = "PLAY"
var apple, appleImg;
var points = 0
var lineV, lineH, lineHGroup, lineVGroup;
var new_x=0;
function preload(){
 appleImg = loadImage("./assets/apple.png")

}

function setup()
{
  createCanvas(800, 800);
  background_image = loadImage("./assets/snakeBackground.webp")

  edges = createEdgeSprites()
  lineHGroup = createGroup()
  lineVGroup = createGroup()

  //vertical lines

  for(i=0;i<=11; i++){
  lineV = createSprite( 67*i, 100, 10, 2000)
  lineVGroup.add(lineV)
}

  /*lineV = createSprite(66*2, 100, 10, 2000)
  lineV = createSprite(66*3, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*2, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*3, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*4, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*5, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*6, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*7, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*8, 100, 10, 2000)
  lineV = createSprite(130 + 67.5*9, 100, 10, 2000)*/
  

  //horizontal lines
  lineH = createSprite(400, 65, 1000, 10)
  lineH = createSprite(400, 66.6*2, 1000, 10)
  lineH = createSprite(400, 66.6*3, 1000, 10)
  lineH = createSprite(400, 66.6*4, 1000, 10)
  lineH = createSprite(400, 66.6*5, 1000, 10)
  lineH = createSprite(400, 66.6*6, 1000, 10)
  lineH = createSprite(400, 66.6*7, 1000, 10)
  lineH = createSprite(400, 66.6*8, 1000, 10)
  lineH = createSprite(400, 66.6*9, 1000, 10)
  lineH = createSprite(400, 66.6*10, 1000, 10)
  lineH = createSprite(400, 66.6*11, 1000, 10)
  lineHGroup.add(lineH)

snake = createSprite(100, 100, 40, 40)
snake.shapeColor = "blue"
  //Math.floor(Math.random() * (max - min) + min);
  apple = createSprite( Math.round(Math.random() * (790 - 200) + 200), Math.round(Math.random() * (790 - 200) + 200))
  apple.addImage(appleImg)
  apple.scale = 0.07
  
}

function draw() 
{
  background(background_image);
  textSize(30)
  text("Points: " + points, 650, 40)
  
  if(gameState === "PLAY"){
    snakeControl()
  }
 
  if(snake.isTouching(edges)){
    gameState = "END"
    snake.setSpeedAndDirection(0, 0)
  }
  
  snake.collide(edges)

  if(snake.isTouching(apple)){
  points = points + 1
  apple.destroy()
  apple = createSprite( Math.round(Math.random() * (790 - 200) + 200), Math.round(Math.random() * (790 - 200) + 200))
  apple.addImage(appleImg)
  apple.scale = 0.07

  for(s=0;s<=10;s++){
   
   new_x+=5
    snake1=createSprite(snake.x + new_x, snake.y, 40, 40)
    snake1.velocityX=snake.velocityX;
    snake1.velocityY=snake1.velocityY

    snake.shapeColor = "blue"
  }
  
  }


 drawSprites()
fill("red")
 text(mouseX+","+mouseY,mouseX,mouseY)
}



function snakeControl(){
  
if(!snake.isTouching(lineVGroup) && keyDown("RIGHT_ARROW")){

  snake.setSpeedAndDirection(3, 0)
}

if(!snake.isTouching(lineVGroup) && keyDown("LEFT_ARROW")){

  snake.setSpeedAndDirection(3, 180)
}

if(!snake.isTouching(lineVGroup) && keyDown("UP_ARROW")){

  snake.setSpeedAndDirection(3, -90)
}

if(!snake.isTouching(lineVGroup) && keyDown("DOWN_ARROW")){

  snake.setSpeedAndDirection(3, 90)
}

}