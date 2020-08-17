
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground,ball;



function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,390,1200,20);
	dustbin1 = new Box(800,330,20,100);
	dustbin2 = new Box(950,330,20,100);
	dustbin3 = new Box(875,370,150,20);
	ball = new Ball(100,370,20);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position, {x:75, y:-80});
	}
}


