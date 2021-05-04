
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var paper1,ground,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,690,800,20);
paper1=new Paper(100,200,40);
box1=createSprite(width/2,630,20,100)
    box1.shapeColor="red";
	box2=createSprite(width/2+115,670,250,20);
	box2.shapeColor="red";
	box3=createSprite(width/2+250,630,20,100)
	box3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:1000});

	}
}

