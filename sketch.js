
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground1;
var boy;

function preload()
{
	boyImg = loadImage ("boy.png")
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

 ground1 = new ground(700, 700, 10000, 80)
 tree1 = new tree(1000, 400, 600, 600)
 stone1 = new stone(300, 150, 100, 100)
 launcher1= new launcher(stone1.body, {x:235,y:420})

 mango1 = new mango(1000, 300, 10)
 mango2 = new mango(950, 250, 10)
 mango3 = new mango(850, 300, 10)

 boy= createSprite(300, 550, 10, 10)
 boy.addImage(boyImg)
 boy.scale= 0.20;
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
ground1.display();
tree1.display();
stone1.display();
launcher1.display();
mango1.display();
mango2.display();
mango3.display();
detectollision(stone1, mango1)
detectollision(stone1, mango2)
detectollision(stone1, mango3)

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcherObject.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }