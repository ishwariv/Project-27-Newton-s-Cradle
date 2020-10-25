class Bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.r=65;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        //ellipseMode(RADIUS);
        rectMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}