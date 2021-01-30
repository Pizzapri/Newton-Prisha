class Rubbad{
    constructor(bodyA,bodyB,x,y){

        this.x=x;
        this.y=y;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.x,y:this.y}
        }
        this.rubbad=Constraint.create(options)
        World.add(world,this.rubbad);
    }
    display(){
        
        var pointA = this.rubbad.bodyA.position;
        var pointB = this.rubbad.bodyB.position;
        strokeWeight(4);
        var topX=pointA.x;
        var topY=pointA.y;
        var bottomX=pointB.x+this.x;
        var bottomY=pointB.y+this.y;

        line(topX,topY,bottomX,bottomY);

    }
}