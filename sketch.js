
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("white");
  stroke("black");
  textSize(20);
  fill ("black");
  text("survivalTime : "+ survivalTime,100,50);
  survivalTime = survivalTime+Math.round(frameRate()/60)
 if(ground.x<0){
    ground.x = ground.width/2
    }
  if(keyDown("space")){
  monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  drawSprites();
  banana();
  obstacles();
  
}
function banana(){
  if (frameCount%80===0){
var banana = createSprite(500,40,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX = -5;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 100
    FoodGroup.add(banana);
    
}
  
}
function obstacles(){
if(frameCount%300===0){
var obstacles = createSprite(500,330,10,10);
  obstacles.addImage(obstaceImage);
  obstacles.velocityX = -4;
  obstacles.scale = 0.1;
  obstacles.lifetime = 130;
  obstacleGroup.add(obstacles);
  obstacles.depth = ground.depth;
  ground.depth = obstacles.depth+1;
  

}


}





