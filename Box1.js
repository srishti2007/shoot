class Box1 {
    constructor(x,y,width,height) {
        
    this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity = 255;
    }
    display(){
      if (this.body.speed<3){

        var pos =this.body.position;
        strokeWeight(0);
        rectMode(CENTER);
        fill(209, 33, 127);
        rect(pos.x, pos.y, this.width, this.height);
        }
  
        else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 2;
        tint(255, this.Visiblity);
        pop();
      }
      
    }
  };