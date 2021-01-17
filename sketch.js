const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,bgImg;
var bg;

var score=0;
function preload(){
  polygon_img=loadImage("polygon.png");
  bgImg=loadImage("bg.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  console.log(block2);
  block3 = new Block(360,275,30,40);
  console.log(block3);
  block4 = new Block(390,275,30,40);
  console.log(block4);
  block5 = new Block(420,275,30,40);
  console.log(block5);
  block6 = new Block(450,275,30,40);
  console.log(block6);
  block7 = new Block(480,275,30,40);
  console.log(block7);
 

  
  
  //level two
  block8 = new Block(330,235,30,40);
  console.log(block8);
  block9 = new Block(360,235,30,40);
  console.log(block9);
  block10 = new Block(390,235,30,40);
  console.log(block10);
  block11 = new Block(420,235,30,40);
  console.log(block11);
  block12= new Block(450,235,30,40);
  console.log(block12);

  
  
  //level three
  block13 = new Block(360,195,30,40);
  console.log(block13);
  block14 = new Block(390,195,30,40);
  console.log(block14);
  block15 = new Block(420,195,30,40);
  console.log(block15);
  
 
  
  
  //top
  block16 = new Block(390,155,30,40);
  console.log(block16);

  //set 2 for second stan
  
  //level one
  block17 = new Block(640,175,30,40);
  console.log(block2);
  block18 = new Block(670,175,30,40);
  console.log(block3);
  block19 = new Block(700,175,30,40);
  console.log(block4);
  block20 = new Block(730,175,30,40);
  console.log(block5);
  block21 = new Block(760,175,30,40);
  console.log(block6);
  
  //level two
  block22 = new Block(700,135,30,40);
  console.log(block22);
  block23 = new Block(730,135,30,40);
  console.log(block23);
  block24 = new Block(760,135,30,40);
  console.log(block24);
 
  
  //top
  block25 = new Block(730,95,30,40);
  console.log(block25);
  
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

  getTime();

  

}
function draw() {
  background(bgImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("SCORE:"+score,750,40);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  
 
 
  
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  //rect(this.ball);
  slingShot.display();
}

function mouseDragged(){
  //add code
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  
}

function mouseReleased(){
  //add code
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball);
  }
}

async function getTime() 
{ //var response = fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
// console.log(response); 
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
console.log(response); 
var responseJSON = await response.json(); 
console.log(responseJSON); 
console.log(responseJSON.day_of_year); 
var datetime = responseJSON.datetime 
var hour = datetime.slice(11,13); 
console.log(hour);
if(hour>=05 && hour<=17){
    bg="bg.png"
}
else{
    bg="bg2.jpg"
}
backgroundImg=loadImage(bg);


}