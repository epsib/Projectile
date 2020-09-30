
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;


function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

  var options ={
    isStatic:true
  }
  
  paper = new Paper(50,30) 
  ground1 = Bodies.rectangle(200,385,400,10, options);
  dustbinbot = new Dustbin(300,373,170,17)
  dustbinleft = new Dustbin(223.5,339, 17,85)
  dustbinright = new Dustbin(374.5,339, 17,85)
  fill("red");
  World.add(world,ground1)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("black");
  var pos = ground1.position
  rect(pos.x,pos.y, 400,10);
  drawSprites();
  paper.display();
  dustbinbot.display();
  dustbinleft.display();
  dustbinright.display();
  //keyPressed();
 
}

function keyPressed(){
    if (keyCode ===UP_ARROW){
       Matter.Body.applyForce(paper.body, paper.body.position,{x:100,y:-100});
	}

}

