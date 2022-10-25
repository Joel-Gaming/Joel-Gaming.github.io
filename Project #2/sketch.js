// 2 Dementanial Grid Assignment
// Joel Penner
// Date

let grid = [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 6]]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("red");
      }
      else if (grid[y][x] === 2) {
        fill("blue");
      }
      else if (grid[y][x] === 3) {
        fill("yellow");
      }                
      else if (grid[y][x] === 4) {
        fill("green");
      }      else if (grid[y][x] === 5) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}
