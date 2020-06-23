const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon,band;
function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground1= new Ground(300, 150, 150, 10)
  ground2= new Ground(300,500,150,10)
  box1= new Box(275,137,30,40)
  box2= new Box(291,137,30,40)
  box3= new Box(306,137,30,40)
  box4= new Box(322,137,30,40)
  box5= new Box(285,117,30,40)
  box6= new Box(301,117,30,40)
  box7= new Box(317,117,30,40)
  box8= new Box(301,97,30,40)
  box9= new Box(125,238,30,40)
  box10= new Box(141,238,30,40)
  box11= new Box(157,238,30,40)
  box12= new Box(173,238,30,40)
  box13= new Box(131,218,30,40)
  box14= new Box(147,218,30,40)
  box15= new Box(163,218,30,40)
  box16 =new Box(147,198,30,40)
  polygon=new Polygon(200,600,70,100) ;
	 band=new Band(polygon.body,{x:200,y:100})
}

function draw() {
  
  background("yellow");  
  Engine.update(engine)
  rectMode(CENTER)
  ground1.display()
  ground2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  polygon.display() 
  band.display()
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  band.fly()
}

