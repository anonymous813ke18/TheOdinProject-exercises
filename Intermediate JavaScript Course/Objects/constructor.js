function Player (name, marker) {
    this.name = name;
    this.marker = marker;
    this.getName = function () {
        return this.name;
    };
    this.getMarker = function () {
        return this.marker;
    };
}

const player1 = new Player("Hammad", "X");
const player2 = new Player("also Hammad", "O");

console.log(`Player 1 is: ${player1.getName()} with marker ${player1.getMarker()}\nPlayer 2 is: ${player2.getName()} with marker: ${player2.getMarker()}`);