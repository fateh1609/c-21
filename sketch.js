var fixedrect,movingrect;
var gameObject1, gameObject2,gameObject3, gameObject4;
var gameObject5,gameObject6;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 80, 50);
  fixedrect.shapeColor="yellow";
  movingrect=createSprite(200,200,80,30);
  movingrect.shapeColor="red";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="pink";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="orange";
  gameObject5=createSprite(700,350,50,50);
  gameObject5.velocityY=-5;
  gameObject5.shapeColor="brown";
  gameObject6=createSprite(700,100,50,50);
  gameObject6.velocityY=+5;
  gameObject6.shapeColor="brown";


}

function draw() {
  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;


  if(isTouching(movingrect, gameObject1)){
    gameObject1.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  else{
    gameObject1.shapeColor="green";
    movingrect.shapeColor="red";
  }
  if(isTouching(movingrect,gameObject2)){
gameObject2.shapeColor="blue";
movingrect.shapeColor="blue";
  }
 else{
  gameObject2.shapeColor="pink";
  movingrect.shapeColor="red";
}
if(isTouching(movingrect, gameObject3)){
  gameObject3.shapeColor="blue";
  movingrect.shapeColor="blue";
}
else{
  gameObject3.shapeColor="purple";
  movingrect.shapeColor="red";
}
if(isTouching(movingrect, gameObject4)){
  gameObject4.shapeColor="blue";
  movingrect.shapeColor="blue";
}
else{
  gameObject4.shapeColor="orange";
  movingrect.shapeColor="red";
}
if(isTouching(movingrect, fixedrect)){
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";
}
else{
  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="red";
}

if(bounceOff(gameObject5,gameObject6)){
  gameObject5.shapeColor="white";
  gameObject6.shapeColor="white";
}
else{
  gameObject5.shapeColor="brown";
  gameObject6.shapeColor="brown";

}
  drawSprites();
}

function isTouching(object1,object2){
  if(object2.x-object1.x< object2.width/2+object1.width/2 
    && object1.x-object2.x<object1.width/2+object2.width/2 
    && object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object1.height/2+object2.height/2){
    return true;
  }
  else{
    return false;
  }
}

function bounceOff(object1,object2){
  if(object2.x-object1.x< object2.width/2+object1.width/2 
    && object1.x-object2.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object2.y-object1.y< object2.height/2+object1.height/2 
      && object1.y-object2.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}