// Chessboard
// Schellenberg
// Sept 19, 2022


let counter = 0;
let someArray = [[0,1,1,0],
                 [1,0,1,0],
                 [1,0,0,0],
                 [0,1,0,1]];
for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray[i].length; j++) {
        counter += someArray[i][j];
    }
}
console.log(counter);