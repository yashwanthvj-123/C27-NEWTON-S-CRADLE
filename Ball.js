
class Ball {

    constructor(x,y,r) {

      var option = { isStatic:false,restitution:0.5 } 

      this.body=Bodies.circle(x,y,r,option);
      this.radius=r;

      World.add(world,this.body);
    
    }

    display () {

        var pos =this.body.position; 
        ellipseMode(RADIUS);
        strokeWeight(3);
        strokeWeight(2);
        fill("red");
        ellipse(pos.x,pos.y, (this.radius)/2 );

    }
}
