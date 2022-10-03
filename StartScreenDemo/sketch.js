// Start Screen
// Joel Penner
// Oct 3,  2022

let state = "start";
let blueImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  blueImage = loadImage("Blue.png");
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(blueImage, 0, 0);
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)){
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("green")
  }
  else {
    fill("black")
  }
  rect(400, 400, 300, 150);
}

function mouseInsideRect(left, right, top,  bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}