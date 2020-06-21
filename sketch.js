var bg,bgImg
var player1,player2,ball,player1img,player2img
var ball,ballimg
var ground,groundimg,inground
var goal1,goal1img,goal2,goal2img
var ballstop1,ballstop2,ballstop3,ballstop4
var score1=0,score2=0
var powerup,counter=150
function preload (){
  bgImg=loadImage("TS-_-stadium-1.jpg")
  player2img=loadImage("ronaldo2.png")
  player1img=loadImage("ronaldo.png")
  ballimg=loadImage("ball.png")
  groundimg=loadImage("ground.jpg")
  goal1img=loadImage("goal1.png")
  goal2img=loadImage("goal2.png")
}
function setup(){
  createCanvas(1350,625)
bg=createSprite(650,300,1350,625)
bg.addImage(bgImg);
bg.scale=1.5
ground=createSprite(675,600,1400,10)
inground=createSprite(675,615,1400,10)
inground.visible=false;
goal1 =createSprite(80,450,30,50)
goal1.addImage(goal1img)
goal1.scale=1.25;
goal2=createSprite(1270,450,30,50)
goal2.addImage(goal2img)
goal2.scale=1.25;
powerup=createSprite(random(500,800),random(50,300),40,40)
powerup.visible=false;
ballstop1=createSprite(15,300,10,10000)
ballstop1.visible=false;
ballstop2=createSprite(1335,300,10,10000)
ballstop2.visible=false;
ballstop3=createSprite(70,300,200,10)
ballstop3.visible=false;
ballstop4=createSprite(1280,300,200,10)
ballstop4.visible=false;
player1=createSprite(300,500,70,100);
player1.addImage(player1img)
player1.setCollider("circle",0,0,100)
player2=createSprite(900,500,70,100);
player2.addImage(player2img)
player2.scale=1
player2.setCollider("circle",0,0,100)
ball=createSprite(650,500,20,20);
ball.addImage(ballimg)
ball.scale=0.15;
ball.setCollider("circle",0,0)
}
function draw(){
background("grey")
createEdgeSprites();
player1.collide(inground)
player2.collide(inground)
player1.collide(ballstop1)
player1.collide(ballstop2)
player2.collide(ballstop1)
player2.collide(ballstop2)
ball.collide(inground)
ball.bounceOff(ballstop1);
ball.bounceOff(ballstop2);
ball.bounceOff(ballstop3);
ball.bounceOff(ballstop4);
if(player1.isTouching(powerup)){
  player2.velocity
}
if(frameCount%10===0){
  counter=counter-1
  console.log(counter)
}
if(counter<=40 && counter>0){
  powerup.visible=true
}
if(counter===0){
  powerup.visible=false
  counter=200
}
if(ball.isTouching(player2) && keyWentDown(DOWN_ARROW)){
  ball.velocityY=-20
  ball.velocityX=-5
}
if(ball.isTouching(player1) && keyWentDown(83)){
  ball.velocityY=-20
  ball.velocityX=5
}

if(keyDown(UP_ARROW) && player2.y>=480){
player2.velocityY = -15 ;
}
if(keyDown(87) && player1.y>=480){
  player1.velocityY=-15;
}
if(ball.y>400 && ball.x<100){
  score2=score2+1;
  ball.x=650;
  ball.y=500;
  ball.velocityY=0
  ball.velocityX=0
  player1.x=300
  player1.y=500
  player2.x=900
  player2.y=500
  player2.velocityY=0
  player1.velocityY=0
  player2.velocityX=0
  player1.velocityX=0
}
if(ball.y>400 && ball.x>1250){
  score1=score1+1;
  ball.x=650;
  ball.y=500;
  ball.velocityY=0
  ball.velocityX=0
  player1.x=300
  player1.y=500
  player2.x=900
  player2.y=500
  player2.velocityY=0
  player1.velocityY=0
  player2.velocityX=0
  player1.velocityX=0
}

ball.velocityY=ball.velocityY+0.8
player2.velocityY= player2.velocityY+0.7
player1.velocityY=player1.velocityY+0.7
ball.bounceOff(player2)
ball.bounceOff(player1)
if(keyDown(LEFT_ARROW)){
player2.x=player2.x-9
}
if(keyDown(RIGHT_ARROW)){
  player2.x=player2.x+9
}
if(keyDown(65)){
  player1.x=player1.x-9
  }
  if(keyDown(68)){
    player1.x=player1.x+9
    }
  

drawSprites();

strokeWeight(6)
stroke("white")
line (660,10,660,80) 
textSize(40)
fill ("white")
text(score1,600,50)
text(score2,700,50)
}