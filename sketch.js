const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops;
function preload(){
    
}

function setup(){
   createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
}

function draw(){
    background(0);
    var maxDrops = 100;
    
    if (frameCount%150===0)
    {
    for(var i = 0; i<maxDrops; i++)
    { 
      drops = new Drop(random(0,800,),0,5);
    }
    if (drops.body.position.y>800)
    {
        drops.body.position.y=0;
    }
    drops.display();
    }
}