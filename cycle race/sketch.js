var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var bellSound;
var END =0;
var PLAY =1;
var gameState = PLAY;
var cg,pink,yellow,red;
var distance=0;
 var pca,yca,rca;
var mf,pf,yf,rf;
var gameOver,goi; 
var backgroundImage;
 function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
bellSound=loadSound("bell.mp3")
pca=loadAnimation("opponent1.png","opponent2.png");
backgroundImage=loadImage("road.png");
yca=loadAnimation("opponent4.png","opponent5.png");
rca=loadAnimation("opponent7.png","opponent8.png");
mf.loadImage("mainPlayer3.png");
pf.loadImage("opponent3.png");
yf=loadImage("opponent6.png");
rf=loadImage("opponent9.png");
goi.loadImage("gameOver.png")

}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX =-(6+2*distance/150)
path.velocityY=-(6+2*distance/150)
//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
 mainCyclist.play(bellSound,true) 
gameOver=createSprite(300,500,20,20)
gameOver.addImage(goi); 
cg=new Group ();
}

function draw() {
  background(backgroundImage);
  if(gameState==1){
   gameOver.visible=false;
    mainCyclist.y = mouseY;
  edges= createEdgeSprites();
    mainCyclist .collide(edges);
   
    opp1();   
  opp2()
opp3();
  }
if(mainCyclist.isTouching(cg)){
cg.destroyEach();
cg.setVelocityEach(0,0)
mainCyclist.addImage(mf);
mainCyclist.setVelocity(0,0);
pink.addImage(pf);
yellow.addImage(yf)
red.addImage(rf);
gameState=0;
}
if (gameState==0) {
 gameOver.visible=true 
}
 if (keyDown("UP_ARROW")); {
 restart();  
 }
console.log(gameState);
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
 distance=distance+Math.round(getFrameRate()/50); 
   //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
function opp1(){
pink=createSprite(250,Math.round(random(0,300)),20,20);
pink.addAnimation(pca);
pink.scale=0.6;
pink.setLifetime(400)
cg.add(pink);
}
function opp2(){
  yellow=createSprite(250,Math.round(random(0,300)),20,20);
 yellow.addAnimation(yca);
  yellow.scale=0.6;
  yellow.setLifetime(400)
  cg.add(yellow);
}
function opp3(){
red=createSprite(250,Math.round(random(0,300)),20,20);
red.addAnimation(rca);
red.setLifetime(400);
cg.add(red);
}
function restart(){
gameState=1
cg.destroyEach();
distance=0
}

