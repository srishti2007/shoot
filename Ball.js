class Bird extends Box {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/ball.png");
  }

  display() {
    var pos =this.body.position;
    imageMode(CENTER);
    fill(255, 124, 124);
    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}
