class CHAIN{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.4,
        length:200
    }
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke(0,0,255);
        line(pointA.x,pointA.y - 20,pointB.x,pointB.y);
        pop();
    }
}