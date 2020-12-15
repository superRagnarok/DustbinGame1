class PaperClass {
    constructor (x,y,r){
    var options={
        restitution: 0.8,
        friction: 0.5,
        density: 1.2
    }
    this.r=40;
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
     display(){
         var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        stroke(0);
        ellipse(0,0,this.r,this.r);
        pop(); 
     }
}
