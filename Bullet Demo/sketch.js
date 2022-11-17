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
    image(this.bullet, this.x, this.y, 5, 3);
  }

  move() {
    //move left to right
    this.x += this.dx;
  }

  isDead() {
    return this.x <= windowWidth;
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
    if (theBullets[i].isDead()) {
      //remove from array
      theBullets.slice(i, 1);
    }
    else {
      theBullets[i].display();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 10; i++) {
    let theBullet = new Bullet(mouseX, mouseY);
    theBullets.push(theBullet);
  }
}

