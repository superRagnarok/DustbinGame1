
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dust1;
var dust2;
var dust3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    ground = new Ground (400,600,800,10);
	paper = new PaperClass (100,500,20,20);
	dust1 = new Dustbin(600,595,200,20);
	dust2 = new Dustbin(500,555,20,100);
    dust3 = new Dustbin(700,555,20,100);
        
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  //drawSprites();
  paper.velocityY=paper.velocityY+0.8;
  text("Press Ctrl+R to play again",50,50);
  ground.display();
  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
  keypressed();
}
function keypressed(){
	if (keyCode === UP_ARROW && paper.body.position.x<500){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-3});
	    
	}
}