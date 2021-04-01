
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

var bobDiameter = 30;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new bob(500,330,bobDiameter)
	bobObject2= new bob(260,330,bobDiameter)
	bobObject3= new bob(320,330,bobDiameter)
	bobObject4= new bob(380,330,bobDiameter)
	bobObject5= new bob(440,330,bobDiameter)
    Ground = new Roof(width/2,500,width,40)
	RoofObject= new Roof(380,100,400,50)

	rope1= new Rope(bobObject1.body, RoofObject.body, bobDiameter*4,0)
  rope2= new Rope(bobObject2.body, RoofObject.body, bobDiameter*-4,0)
  rope3= new Rope(bobObject3.body, RoofObject.body, bobDiameter*-2,0)
  rope4= new Rope(bobObject4.body, RoofObject.body, bobDiameter*0.05,0)
  rope5= new Rope(bobObject5.body, RoofObject.body, bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightGrey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Ground.display();
  RoofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:100,y:106});
	    
	 }
   }

