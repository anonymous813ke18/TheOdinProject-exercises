function createGame (gameName = "") {
    let score = 0;

    function win () {
        score++;
        return `Your ${gameName} score is ${score}`;
    };

    return win;
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');