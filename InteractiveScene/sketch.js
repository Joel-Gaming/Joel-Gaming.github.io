// Maze
// Joel Penner
// Oct 3, 2022

let state = "start";
let wallLongWidth = 30;
let wallShortWidth = 15;
let wallLongHeight = 50;
let wallShortHeight = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawMaze();
}

function drawStartSquare() {
  fill("green");
  square(0, 0, 30);
}

function drawPath() {
  fill("black");
  rect(30, 5, wallLongWidth, wallShortHeight);
  rect(50, 5, wallShortWidth, wallLongHeight);
  rect(35, 50, wallLongWidth, wallShortHeight);
  rect(35, 65, wallShortWidth, wallLongHeight);
  rect(35, 105, wallLongWidth, wallShortHeight);
  rect(65, 105, wallLongWidth, wallShortHeight);
  rect(95, 105, wallShortWidth, wallLongHeight);
  rect(80, 155, wallLongWidth, wallShortHeight);
  rect(60, 155, wallLongWidth, wallShortHeight);
  rect(30, 155, wallLongWidth, wallShortHeight);
  rect(0, 155, wallLongWidth, wallShortHeight);
  rect(0, 155, wallShortWidth, wallLongHeight);
  
}

function drawEndSquare() {
  fill("red");
  square(windowWidth-25, windowHeight-25, 30);
}

function drawMaze() {
  if (state === "start") {
    background(255);
    drawStartSquare();
    drawEndSquare();
    drawPath();
    fill("white");
    square(5, 5, 10);
    state = "maz";
  }
  else if (state === "maze") {
    background(0);
    drawStartSquare();
    drawEndSquare();
    drawPath();
    fill("white");
    square(5, 5, 10);
  }
}
