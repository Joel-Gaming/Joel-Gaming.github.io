// Project Title

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    rect(this.x, this.y, this,width, this.height);
  }
}

let button1;
let button2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = new Button (100, 100, 300, 100);
  button2 = new Button (100, 300, 300, 100);
}

function draw() {
  button1.display();
  button2.display();
}
