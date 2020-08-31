
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(60, 370, 30, 30);
	trashcan = new Trashcan(330, 345, 20, 90);

	Engine.run(engine);

	launch = new Launch(bird.body,{x:200, y:100})
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display;
  trashcan.display;
  drawSprites();
 
}



