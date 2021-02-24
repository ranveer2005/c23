const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,box1,box2,ground;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(250,330,70,70);
  box2 = new Box(200,280,50,50)
  ground = new Ground(200,390,400,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}