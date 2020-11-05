function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
  wall=createSprite(600,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52)
  
  car=createSprite(200, 200, 50, 50);

  wall.shapeColor=color("white");
  car.velocityX=speed;

}

function draw() {
  background("black");  

  if (hasCollided(car,wall)){
    car.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
 

  drawSprites();
}

function hasCollided(lcar,lwall){
carRightEdge=car.x+car.width;
wallLeftEdge=wall.x;
if(carRightEdge>=wallLeftEdge){
  return true
}
return false;
}