
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;

function preload(){
bg = loadImage*("j2.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  
  background(bg);
  Engine.update(engine);
  
 

}

