class bob{
    constructor(x, y) {
        var options = {
            'restitution':1,
            isStatic:false,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 23, options);
        
                World.add(world, this.body);
      }
      display(){
        
       ellipseMode(RADIUS) 
       fill("blue")
    ellipse (this.body.position.x,this.body.position.y,23,23)

    }
}