// Perlon Noise Demo
// Joel Penner
// Date

let allCircles = [];

function keyPressed() {
  let theBall = {
    x:  random(width),
    y:  random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCircles.push();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");

  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time + 5000) * height;

    allCircles[i].time += 0.01;

    circle(allCircles[i].x, allCircles[i].y, allCircles[i].radius*2);
  }
}