// Image Demo
// Joel Penner
// Sept 22, 2022

let leafImage;
let scaler = 0.2;


function keyPressed() {
  if (keyCode === UP_ARROW) {
    scaler += scaler;
  } 
  if (keyCode === DOWN_ARROW) {
    scaler -= scaler;
  }
}
function preload() {
  leafImage = loadImage ("leaf.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(leafImage, mouseX, mouseY, leafImage.width*scaler, leafImage.height*scaler);
}

