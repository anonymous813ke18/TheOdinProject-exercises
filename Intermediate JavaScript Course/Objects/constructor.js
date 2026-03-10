function Player (name, marker, nationality) {
    this.name = name;
    this.marker = marker;
    this.nationality = nationality;

    //
    // this.getName = function () {
    //     return this.name;
    // };
    // this.getMarker = function () {
    //     return this.marker;
    // };
}

Player.prototype.getName = function () {
    return this.name;
};

Player.prototype.getMarker = function () {
    return this.marker;
};

const player1 = new Player("Hammad", "X", "Pakistani");
const player2 = new Player("also Hammad", "O", "Arabian");

console.log(`Player 1 is: ${player1.getName()} with marker ${player1.getMarker()} and nationality ${player1.nationality}\nPlayer 2 is: ${player2.getName()} with marker: ${player2.getMarker()} and nationality ${player2.nationality}`);