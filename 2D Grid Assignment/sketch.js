// 2d Demontanal Array Game
// Joel Penner
// Date

// Extra for Experts:
//

// For the start screen
let state = "start";

// For the main board
const ROWS = 100;
const COLS =  100;
let grid;
let cellWidth;
let cellHeight;

// For Red light Green Light
let spawn;
let rlglpeace;
let greenLightDuration;
let redLightDuration;
let respawnPlayer = rlglpeace;
let lastTimeSwitched = 0;
let lightState;

// For Maze
let wallLongWidth;
let wallShortWidth;
let wallLongHeight;
let wallShortHeight;
let movementState = "normal";
let playerX = 0;
let playerY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "board") {
    displayGrid(grid);
  }
}

// startScreen
function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("red");
  }
  else {
    fill("blue");
  }
  rect(400, 400, 300, 150);
}

function mouseInsideRect(left, right, top,  bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)){
    state = "board";
  }
}

// for MainBoard
function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

// Red Light Green Light
function checkIfLightSwitched() {
  if (lightState === "green" && millis() > lastTimeSwitched + greenLightDuration) {
    lightState = "red";
    lastTimeSwitched = millis();
  }
  else if (lightState === "red" && millis() > lastTimeSwitched + redLightDuration) {
    lightState = "green";
    lastTimeSwitched = millis();
  }
}

function showCorrectLight() {
  if (lightState === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (lightState === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //bottom
}

function minigameRedLightGreenLight() {
  checkIfLightSwitched();
  showCorrectLight();
  for (let i = 0; i < windowWidth; i++) {
    redLightDuration = random(1000, 10000);
    greenLightDuration = random(1000, 10000);
  }
}

// Maze game
function drawStartSquare() {
  fill("green");
  square(0, 0, 30);
}

function drawEscapeSquare() {
  fill("red");
  square(random(windowWidth-30), random(windowHeight-30), 30);
}
