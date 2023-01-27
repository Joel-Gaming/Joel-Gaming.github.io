// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Ball { 
  constructor(x, y, diameter, dx, dy) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.dx = dx;
    this.dy = dy;
  }
  
  move() {
    this.x = this.x + this.dx;
    this.y = this.y = this.dy;
  }
  
  display() {
    circle(this.x, this.y, this.diameter);
  }
}

let ballArray = [];
let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  while (ballArray.length < 5) {
    ball = new Ball(random(20, windowWidth-20), random(20, windowHeight-20), random(10, 50), random(1, 5), random(1, 5));
    ballArray.push(ball);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].move();
    ballArray[i].display();
  }
}

function keyPressed() {
  ball = new Ball(random(10, 50), random(10, 50), random(10, 50), random(1, 10), random(1, 10));
  ballArray.push(ball);
}