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
