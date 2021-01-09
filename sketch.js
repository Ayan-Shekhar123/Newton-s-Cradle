const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ; 

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

bobObject1=new Pendulum(300,350,50);
bobObject2=new Pendulum(350,350,50);
bobObject3=new Pendulum(400,350,50);
bobObject4=new Pendulum(450,350,50);
bobObject5=new Pendulum(500,350,50);
ground = new Roof(400,200,300,20);
sling1= new SlingShot(bobObject1.body,ground.body,-50*2,0);
sling2= new SlingShot(bobObject2.body,ground.body,-25*2,0);
sling3= new SlingShot(bobObject3.body,ground.body,-0*2,0);
sling4= new SlingShot(bobObject4.body,ground.body,25*2,0);
sling5= new SlingShot(bobObject5.body,ground.body,50*2,0);







	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body, {x: mouseX, y:mouseY});
}