class Drop{
   constructor(x,y,r)
   {
    var options = {
     isStatic:false
    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
   }

  
   display()
   {
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);

    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();
   }
}