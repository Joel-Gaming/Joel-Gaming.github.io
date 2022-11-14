// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 1;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25 && y > 5) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50 && y < windowHeight-5) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75 && y > windowWidth - 5) {
      //right
      this.x += this.speed;
    }
    else {
      //left
      if (y < 5) {
        this.x -= this.speed;
      }
    }

  }
}

let lizzy;
let joel;
let tori;
let luke;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lizzy = new Walker (700, 200);
  joel = new Walker (300, 200);
  tori = new Walker (width-150, height-150);
  luke = new Walker (width/2, height/2);
  joel.color =  "blue";
  tori.color = "green";
  luke.color = 0;
}

function draw() {
  lizzy.move();
  joel.move();
  tori.move();
  luke.move();
  
  lizzy.display();
  joel.display();
  tori.display();
  luke.display();
}
