const World=Matter.World
  const Engine=Matter.Engine
  const Bodies=Matter.Bodies
  var particles=[]
  var plinko=[]
  var divisions=[]
  var divisionHeight= 300

  




function setup() {
  engine = Engine.create()
  world = engine.world
  
  createCanvas(800,800);
  ground=new Ground(width/2,height,width,20)
  //createSprite(400, 200, 50, 50);
  for(var k=0;k<=width;k=k+80){
  divisions.push=(new Divisions(k,height-divisionHeight,10,divisionHeight))
  }

}

function draw() {
  background(0,0,0);  

  Engine.update(engine)
  ground.display()
  for(var k=0;k,divisions.length;k++){
    divisions[k].display()
  }



}