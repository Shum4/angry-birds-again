class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //to crfeate a genral body
        this.body = Bodies.rectangle(x, y, width, height, options);
        //to make a width or a height
        this.width = width;
        this.height = height;
        //to load the image
        this.image = loadImage("sprites/base.png");
        //to add to the world
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        //translates the x and y posititon so the rectangles can turn
        translate(this.body.position.x, this.body.position.y);
        //to rotate at a specific angle
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}