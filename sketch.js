var ball;
var rondo;
var player1;
var player2;
var player3;
var player4;




function setup() {
  createCanvas(800,400);
  rondo= createSprite(400, 200, 60, 10);
  player1= createSprite(400, 370, 60, 10);
  player2= createSprite(130, 200, 10, 60);
  player3= createSprite(400, 30, 60, 10);
  player4= createSprite(670, 200, 10, 60);
  ball= createSprite(400, 350, 20, 20);
  }
  
  
  

function draw() {
  background(0);  


    if (keyDown(UP_ARROW)){
      ball. velocityY= - 10;
    }

    if (keyDown(DOWN_ARROW)){
      ball. velocityY=  10;
    }

    if (keyDown(RIGHT_ARROW)){
     // ball. velocityY= - 20;
      ball.velocityX= 10;
    }

    if (keyDown(LEFT_ARROW)){
      //ball. velocityY= - 20;
      ball.velocityX= -10;
    }

    if (keyDown("X")){
      player1.velocityX=10;
    }

    if (keyDown("Z")){
      player1.velocityX=-10;
    }

    if (keyDown("A")){
      player2.velocityY=10;
    }

    if (keyDown("Q")){
      player2.velocityY=-10;
    }

    if (keyDown("D")){
      player3.velocityX=-10;
    }

    if (keyDown("F")){
      player3.velocityX=10;
    }

    if (keyDown("S")){
      player4.velocityY=10;
    }

    if (keyDown("W")){
      player4.velocityY=-10;
    }
 
    if (ball.bounceOff(player1)){
      ball.velocityX=0;
      ball.velocityY=0;
      player1.velocityX=0;
      player1.velocityY=0;
     
      rondo.y= ball.y-30
      rondo.x= ball.x;
    }

    if (ball.bounceOff(player2)){
      ball.velocityX=0;
      ball.velocityY=0;
      player2.velocityX=0;
      player2.velocityY=0;
      rondo.width=10;
      rondo.height=60;
      rondo.x= ball.x+30
      rondo.y=ball.y;

    }

    if (ball.bounceOff(player3)){
      ball.velocityX=0;
      ball.velocityY=0;
      player3.velocityX=0;
      player3.velocityY=0;
      rondo.y= ball.y+30
      rondo.x= ball.x;
    }

    if (ball.bounceOff(player4)){
      ball.velocityX=0;
      ball.velocityY=0;
      player4.velocityX=0;
      player4.velocityY=0;
      rondo.width=10;
      rondo.height=60;
      rondo.x= ball.x-30
      rondo.y=ball.y;
    }

    

    if (rondo.isTouching(ball)){
      text("GAME OVER", 400, 200);
      rondo.velocityX=0;
      rondo.velocityY=0;
      ball.velocityX=0;
      ball.velocityY=0;
      player1.velocityX=0;
      player1.velocityY=0;
      player2.velocityX=0;
      player2.velocityY=0;
      player3.velocityX=0;
      player3.velocityY=0;
      player4.velocityX=0;
      player4.velocityY=0;
    }
  

  drawSprites();
}