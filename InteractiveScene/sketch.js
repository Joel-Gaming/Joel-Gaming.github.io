// Maze
// Joel Penner
// Oct 3, 2022

let state = "start";
let x = 5;
let y = 5;
let wallLongWidth = 30;
let wallShortWidth = 15;
let wallLongHeight = 50;
let wallShortHeight = 15;
let squareSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  handleKeys();
  drawSquare();
  drawMaze();
}

function drawStartSquare() {
  fill("green");
  square(0, 0, 30);
}

function drawPath() {
  fill(0);
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
  rect(0, 205, wallLongWidth, wallShortHeight);
  rect(30, 205, wallShortWidth, wallLongHeight);
  rect();
}

function drawEndSquare() {
  fill("red");
  square(windowWidth-25, windowHeight-25, 30);
}

function drawMaze() {
  if (state === "start") {
    background(220);
    handleKeys();
    drawStartSquare();
    drawEndSquare();
    drawPath();

    state = "maz";
  }
  
  else if (state === "maze") {
    background(0);
    drawStartSquare();
    drawEndSquare();
    drawPath();
    fill("white");
  }
}

function handleKeys() {
  if (keyIsDown(87)) { //w
    y -= squareSpeed;
  }
  if (keyIsDown(83)) { //s
    y += squareSpeed;
  }
  if (keyIsDown(68)) { //d
    x += squareSpeed;
  }
  if (keyIsDown(65)) { //a
    x -= squareSpeed;
  }
}

function drawSquare() {
  fill("white");
  noStroke();
  square(x, y, 10);
}