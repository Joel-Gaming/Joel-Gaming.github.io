// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bullet;
    this.dx = random(-5, 5);
    this.dy = random(-5,5);
  } 

  preload() {
    this.bullet = loadImage ("bullet.png");
  }
  
  display() {
    image(this.bullet);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

let theBullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < theBullets.length; i++) {
    theBullets[i].move();
    theBullets.display();
  }
}
