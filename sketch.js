var movingRect;

function setup() {
  createCanvas(1200,800);
 fill("green");
 movingRect = createSprite(400,200,80,30);
 movingRect.draw = function(){
   ellipse(0,0,40,40);
 }
 //movingRect.shapeColor = "green";
 //movingRect.debug = true;
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
 if(movingRect.x<600){
   background(150,100,50);
 }
 else if (movingRect.x>600){
   background(50,100,150);
 }

if(movingRect.y>600){
  background(150,200,100);
}
else if(movingRect.y<200){
  background(100,200,150);
}
  drawSprites();
}
