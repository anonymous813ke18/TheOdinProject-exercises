// 
//Objects as data structures
//

// Without Objects
const   playerOneName = "tim";
const   playerOneMarker = "X";
const   playerTwoName = "jenn";
const   playerTwoMarker = "O";

//with Objects
const playerOne = {
    name: "tim",
    marker: "X",
};

const playerTwo = {
    name: "jenn",
    marker: "O",
};

function gameOver (winningPlayer) {
    console.log("Congratulations!");
    console.log(`${winningPlayer.name}: ${winningPlayer.marker} is the winner`);
}

gameOver(playerOne);