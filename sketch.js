
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;

function setup() {

	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground (width/2,160,300,25);

	startbobPositionX=width/2;	
	startbobPositionY=400
	bobDiameter=35;

	bob1 = new Ball (startbobPositionX-bobDiameter*2, startbobPositionY, bobDiameter);
	bob2 = new Ball (startbobPositionX-bobDiameter, startbobPositionY, bobDiameter);
	bob3 = new Ball (startbobPositionX, startbobPositionY, bobDiameter);
	bob4 = new Ball (startbobPositionX+bobDiameter, startbobPositionY, bobDiameter);
	bob5 = new Ball (startbobPositionX+bobDiameter*2, startbobPositionY, bobDiameter);

	rope1 = new Rope (bob1.body,ground.body,-bobDiameter*2,0);
	rope2 = new Rope (bob2.body,ground.body,-bobDiameter,0);
	rope3 = new Rope (bob3.body,ground.body,0,0);
	rope4 = new Rope (bob4.body,ground.body,bobDiameter,0);
	rope5 = new Rope (bob5.body,ground.body,bobDiameter*2,0);

	Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);

  background("yellow");
  
  bob1.display ();
  bob2.display ();
  bob3.display ();
  bob4.display ();
  bob5.display ();
  
  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();

  ground.display ();

  drawSprites();
 
}

function keyPressed () {

	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce (bob1.body, bob1.body.position, {x:35,y:-65} );

	}

}
