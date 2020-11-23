const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function setup() {
  createCanvas(windowWidth/2,windowHeight/1.5);
   engine = Engine.create();
  world = engine.world;
/*
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio= PixelDensity();

  let options ={
    mouse:canvasmouse
  }

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
*/
  bob1= new Pendulum(241,250,40);
  bob2= new Pendulum(281,250,40);
  bob3= new Pendulum(321,250,40);
  bob4= new Pendulum(361,250,40);
  bob5= new Pendulum(401,250,40);
  
 rope1= new Rope(bob1.body,{x:241,y:100})
 rope2= new Rope(bob2.body,{x:281,y:100})
 rope3= new Rope(bob3.body,{x:321,y:100})
 rope4= new Rope(bob4.body,{x:361,y:100})
 rope5= new Rope(bob5.body,{x:401,y:100})
    
}
 


function draw() {
  background("black");
  Engine.update(engine);

//  bob1.body.position.x=mouseX;
 // bob1.body.position.y=mouseY;


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

function mouseDragged()
{
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}
