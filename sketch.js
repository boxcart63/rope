const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground 
let engine;
let world;
var fruit
var rope
var link
function setup() 
{
 frameRate(80)
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope=new Rope(8,{x:250,y:50})
  ground= new GROUND(250,625,width,50)
    fruit=Bodies.circle(250,200,15,{density:0.01})
    World.add(world,fruit)
    link1= new LINK(rope,fruit)
  Matter.Composite.add(rope.body,fruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,15)
}




