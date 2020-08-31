class Launch {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10,
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        var pointA = this.launch.bodyA.position;
        var pointB = this.launch.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}