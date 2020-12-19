var PLAY= 1;
var END= 0;
var gamestate= PLAY;
var monkey , monkey_running;
var banana ,bananaImage; 
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var background, backgroundImage;
var score=0;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage= loadImage("forest.jpg")
}

function setup() 
{
  createCanvas(400, 400);
  background= createSprite(20, 10, 10, 10);
  background.addImage(backgroundImage);
  
  monkey = createSprite(80,320,20,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
     
  }


function draw() 
{
  if (gamestate=== PLAY)
  {
      ground= createSprite(400, 320, 900, 10);
      ground.visible=false;
      //ground.velocityX=-4;
      //ground.x= ground.width/2;
      background.velocityX=-2
      if(background.x<0)
      {
         background.x=background.width/2;
      }
      monkey.collide(ground);
      
      if (keyDown("space"))
      {
        monkey.velocityY = -12;
      }
      monkey.velocityY= monkey.velocityY+0.8; 
      console.log(monkey.y);
    
      score = score + Math.round(getFrameRate()/60);  
    
      spawnobstacles()
      spawnbananas()
  }
}

function spawnobstacles()
{
  if (frameCount%300 === 0)
  {
    var obstacle = createSprite(400,298,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(6 + score/100);
    
    obstacle.depth = monkey.depth; 
    monkey.depth = monkey.depth + 1;
    
    obstacle.scale=0.1;
    obstacle.lifetime = 300;
   }
  
 
  drawSprites()
  text("Survival time: "+ score, 200,50);
  
}

function spawnbananas()
{
     if (frameCount%80 === 0)
  {
    banana = createSprite(400,200,10,40);
    banana.addImage(bananaImage);
    banana.velocityX = -(6 + score/100);
    
    banana.scale=0.1;
    banana.lifetime = 300;
    banana.y=Math.round(random(120,200));
   }
  
  
}
