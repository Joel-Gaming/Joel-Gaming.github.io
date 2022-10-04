// Maze
// Joel Penner
// Oct 3, 2022

let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start") {
    background(255);
  }
  if (state === "maze") {
    background(0);
  }
}

function drawStartSquare() {
  fill("green");
  square(0, 0, 25);
}

function drawEndSquare() {
  fill("red");
  square();
}

function drawMaze() {
  if (state === "start") {
    background(255);
    drawStartSquare();
    drawEndSquare();
    square(10, 10, 10);
  }
  if (state === "maze") {
    background(0);
  }
  square(10, 10, 10);
}