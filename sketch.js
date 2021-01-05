
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var Pendulum1, Pendulum2, Pendulum3, Pendulum4, Pendulum5
var sling1, sling2, sling3, sling4, sling5
var rect

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5)
	engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, option);
  World.add(world, mConstraint);

	rect = new Rect(600, 600, 1200, 20);

	Pendulum1 = new Pendulum(200, 200, 80, 80);
	Pendulum2 = new Pendulum(200, 200, 80, 80);
	Pendulum3 = new Pendulum(200, 200, 80, 80);
	Pendulum4 = new Pendulum(200, 200, 80, 80);
	Pendulum5 = new Pendulum(200, 200, 80, 80);

	sling1 = new sling(Pendulum.body, { x: 500, y: 50 });
	sling2 = new sling(Pendulum.body, { x: 500, y: 50 });
	sling3 = new sling(Pendulum.body, { x: 500, y: 50 });
	sling4 = new sling(Pendulum.body, { x: 500, y: 50 });
	sling5 = new sling(Pendulum.body, { x: 500, y: 50 });

	Engine.run(engine);  
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine);
  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  rect.display();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(Pendulum1.body, { x: mouseX, y: mouseY });
  }

