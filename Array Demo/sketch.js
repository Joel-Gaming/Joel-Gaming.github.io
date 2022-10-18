// Array Demo
// Joel Penner

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
}

function displayCircles() {
  for (let i=0; i < theCircles.length; i++) {
    noStroke();
    fill(theCircles[i].color);
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].radius*2);
  }
}

function mousePressed() {
  spawnCircle();
}

function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    radius: random(25, 75),
    theColor: color(random(255), random(255), random(255), random(255))
  };
  theCircles.push(thisCircle);
}