
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob (-46,300)
bob2= new bob(-92,300)
bob3= new bob(0,300)
bob4= new bob(46,300)
bob5= new bob(92,300)
roof1=new roof(400,100,300,10)
	
rope1= new rope(roof1.body,bob1.body,-46)
rope2= new rope(roof1.body,bob2.body,-92)
rope3= new rope(roof1.body,bob3.body,0)
rope4= new rope(roof1.body,bob4.body,46)
rope5= new rope(roof1.body,bob5.body,92)

Engine.run(engine);
  
}






function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}

function keyPressed() {
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:20})
	}
	
}

