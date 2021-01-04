
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground1 = new GROUND(400,150,300,15);
	ball1 = new BALL(400,350,50,50);
	chain1 = new CHAIN(ball1.body,{x:400,y:150});
	ball2 = new BALL(350,350,50,50);
	chain2 = new CHAIN(ball2.body,{x:350,y:150});
	ball3 =  new BALL(450,350,50,50);
	chain3 = new CHAIN(ball3.body,{x:450,y:150});
	ball4 = new BALL(300,350,50,50);
	chain4 = new CHAIN(ball4.body,{x:300,y:150});
	ball5 = new BALL(500,350,50,50);
	chain5 = new CHAIN(ball5.body,{x:500,y:150});
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  ground1.display();
  ball1.display();
  chain1.display(); 
  ball2.display();
  chain2.display();
  ball3.display();
  chain3.display();
  ball4.display();
  chain4.display();
  ball5.display();
  chain5.display();
 
  drawSprites();
 
}
function mouseDragged(){
 Matter.Body.setPosition(ball4.body,{x:mouseX,y:mouseY})
}



