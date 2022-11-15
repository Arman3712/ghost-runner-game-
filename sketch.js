var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 10;
  doorsGroup = new Group ();
  climbersGroup = new Group (); 
  ghost = createSprite (300 , 300 , 50 ,50)
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;
  

}

function draw() {
  background(200);
spookySound.play();
  
  
  if(tower.y > 400){
      tower.y = 100
    }

   if (keyDown("space")) {
       ghost.velocityY = -3;
       
   }
   ghost.velocityY = ghost.velocityY + 0.5;
  
  
   if (keyDown("left_arrow")) {
    ghost.x = ghost.x - 3 ;
    
}

if (keyDown("right_arrow")) {
  ghost.x = ghost.x + 3 ;
  
}

if (climbersGroup.isTouching(ghost)) {
  ghost.velocityY = 0;

}

spawnDoors();
drawSprites();

}

function spawnDoors (){
  if (frameCount %80 == 0 ) {
    var door = createSprite (300, -70);
    door.addImage(doorImg);
    var climber = createSprite (300, -10);
    climber.addImage(climberImg);
    door.x = Math.round(random(100 , 450));
    climber.x = door.x;
    climber.velocityY = 10;
    door.velocityY = 10 ;
    door.lifetime = 700 ;
    climber.lifetime = 700;
    doorsGroup.add(door);
    climbersGroup.add(climber);
    
  } 


}
