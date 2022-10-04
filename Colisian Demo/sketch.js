let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  circle(100, 100, 1);       
  circle(mouseX, mouseY, 1); 

  hit = collidePointPoint(100, 100, mouseX, mouseY);
  

  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
}