class Drops{
    constructor(x,y){
        var options={
            restituion:0.1,
            friction:0.001
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world, this.body);
    }
    display(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,5,5)
    }
}