// Perlon Noise Demo
// Joel Penner
// Date

let x;
let y;
let radius;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 75;
}

function draw() {
  background(220);
  fill("black");
  x = noise(time) * width;
  y = noise(time + 5000) * height;

  time += 0.01;
  circle(x, y, radius*2);
}