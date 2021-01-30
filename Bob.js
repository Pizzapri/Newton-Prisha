class Bob{
    constructor(x,y){
        var options={
            "isStatic":true,
            "friction":0.5,
            "density":1.2
        }
        this.x=x;
		this.y=y;
		this.radius=120;
		
		this.body=Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        pos.x=this.body.position.x;
        pos.y=this.body.position.y;
        push();
        translate(pos.x, pos.y);
        fill("#E800E3");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}