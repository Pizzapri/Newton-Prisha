
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rubbad1,rubbad2,rubbad3,rubbad4,rubbad5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,100,750,60);

	bob1=new Bob(160,400);
	bob2=new Bob(280,400);
	bob3=new Bob(400,400);
	bob4=new Bob(520,400);
	bob5=new Bob(640,400);

	rubbad1=new Rubbad(bob1.body,roof.body,160,-10);
	rubbad2=new Rubbad(bob2.body,roof.body,280,-10);
	rubbad3=new Rubbad(bob3.body,roof.body,400,-10);
	rubbad4=new Rubbad(bob4.body,roof.body,520,-10);
	rubbad5=new Rubbad(bob5.body,roof.body,640,-10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#D2D2D2");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rubbad1.display();
  rubbad2.display();
  rubbad3.display();
  rubbad4.display();
  rubbad5.display();

  drawSprites();
 
}



