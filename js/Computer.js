class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
        this.life1 = "green";

        this.life2 = "green";
     
        this.life3 = "green";

  }
  life()
  {
    push();
    textSize(20);
    fill("white");
    text("Computer",1200,40);
 
   fill(this.life1);
   rect(1100,50,70,30);
   fill(this.life2);
   rect(1170,50,70,30);
   fill(this.life3);
   rect(1240,50,70,30);
   pop();
 
  }
   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
