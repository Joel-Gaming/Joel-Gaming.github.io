// Local Storage
// Joel Penner
// December 5th 2022

let numOfClicks = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscrore") !== null) {
    highestEver = getItem("highscore");
  }
  else {
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220);

  fill("black");
  textSize(100);
  text(numOfClicks, width/2, height/2);
  
  fill("red");
  text(highestEver, 50, highestEver - 100);
}

function mousePressed() {
  numOfClicks++;

  if (numOfClicks > getItem("highscore")) {
    storeItem("highscore", numOfClicks);
    highestEver = numOfClicks;
  }
}