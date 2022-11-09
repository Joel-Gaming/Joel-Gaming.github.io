// 2d Demontanal Array Game
// Joel Penner
// Date

// Extra for Experts:
//

// playerInfo

// Images for project
let amberImg;
let lukeImg;

// For the start screen
let state = "start";


// For the main board
const ROWS = 40;
const COLS =  40;
let grid;
let cellWidth;
let cellHeight;
let currentEvent;
let timesMoved = 0;
let boardSound;

// For Red light Green Light
let spawn;
let rlglpeace;
let greenLightDuration;
let redLightDuration;
let respawnPlayer = rlglpeace;
let lastTimeSwitched = 0;
let lightState;

// For Maze
let maze = {};
let innerMaze;
let movementState = "normal";
let sX = 0;
let sY = 0;
let playerY = 0;
let playerX = 0;

//allModes
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  grid[playerY][playerX] = 9;
}

function preload() {
  boardSound = loadSound("happy_adventure.mp3");
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "board") {
    displayGrid(grid);
    if (!boardSound.loop()) {
      boardSound.loop();
    }
  }
  if (timesMoved  === 30) {
    endScreen();
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)){
    state = "board";
  }
  else if (state === "board") {
    let xPos = Math.floor(mouseX/cellWidth);
    let yPos = Math.floor(mouseY/cellHeight);

    if (grid[yPos][xPos] === 0) {
      grid[yPos][xPos] = 1;
    }
    else if (grid[yPos][xPos] === 1) {
      grid[yPos][xPos] = 0;
    }
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

// for MainBoard
function displayGrid(grid) {
  boardSound.loop();
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
      else if (grid[y][x] === 2) {
        fill("green");
      }
      else if (grid[y][x] === 3) {
        fill("red");
      }
      else if (grid[y][x] === 9) {
        fill("blue");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(200) < 100) {
        emptyArray[y].push(0);
      }
      else if (random(200) < 199) {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
      timesMoved++;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
      timesMoved++;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 9;
      timesMoved++;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
      timesMoved++;
    }
  }
}

function endScreen() {
  displayButton();
}

function displayButton() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("green");
  }
  else {
    fill("yellow");
  }
  rect(400, 400, 300, 150);
}