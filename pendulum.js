class Pendulum
{
    constructor(x,y,color)
    {
        var option={
            restitution:0,
            slop:1,
            inertia:Infinity
        }
        this.body = Bodies.rectangle(x,y,40,40,option);
        this.r=40;
        this.color=color;
        World.add(world,this.body);
        
    }
    display()
    {
        this.pos = this.body.position;
        push();
        translate(this.pos.x,this.pos.y);
        strokeWeight(2);
        stroke("white");
        fill("black");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}