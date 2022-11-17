// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Bullet {
  constructor(theImage) {
    this.x = 100;
    this.y = 500;
    this.bullet = theImage;
    this.dx = 5;
    this.radius = 3;
  }

  display() {
    image(this.bullet, this.x, this.y, this.image.width*0.3, this.image.height*0.3);
  }

  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }
}

let bullets = [];
let bulletImg;

function preload() {
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someBullet of bullets) {
    bullets.move();
    bullets.display();
  }

  for (let i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }

}

function keyPressed() {
  let someBullet = new Bullet(bulletImg);
  bullets.push(someBullet);
}
