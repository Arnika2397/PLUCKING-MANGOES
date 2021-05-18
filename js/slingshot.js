class slingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            lenght:2,
            stiffness:0.01
        }
        this.sling= Constraint.create(options);
    World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
           var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB
            stroke("black");
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }

    }
}