class BALL{
    constructor(x,y,radius,radius2){
        var options={
            restitution:1,
            density:1,
        }
        this.body = Bodies.rectangle(x,y,radius,radius2,options);
        this.radius = radius;
        this.radius2 = radius2;
        World.add(world,this.body);
    }
 display(){
    var pos = this.body.position;
    push();
    fill("red");
     ellipse(pos.x,pos.y,this.radius,this.radius2);
    pop();   
 }

  
}