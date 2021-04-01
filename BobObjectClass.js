class bob {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.7,
          'friction':0,
          'density':0.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius= radius
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("DarkBlue");
      stroke("Black")
      ellipse(0,0,this.radius, this.radius);
      pop()
    }
  };