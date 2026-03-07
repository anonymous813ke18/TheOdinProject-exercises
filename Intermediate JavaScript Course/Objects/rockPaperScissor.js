const rps = {
    playerScore: 0,
    computerScore: 0,

    playRound (playerChoice) {
        let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
        console.log(randomNumber);
        let computerChoice = randomNumber == 0 ? "rock" :
            randomNumber == 1 ? "paper" :
            randomNumber == 2 ? "scissor" : "not possible";
        switch(computerChoice) {
            case "rock":
                if (playerChoice == "paper") this.playerScore++;
                else if (playerChoice == "scissor") this.computerScore++;
            break;
            case "paper":
                if (playerChoice == "scissor") this.playerScore++;
                else if (playerChoice == "rock") this.computerScore++;
            break;
            case "scissor":
                if (playerChoice == "rock") this.playerScore++;
                else if (playerChoice == "paper") this.computerScore++;
            break;
            default:
            break;
        }
    },

    getWinningPlayer () {
        if (this.playerScore > this.computerScore) return `Player is winning: ${this.playerScore}`;
        else if (this.playerScore == this.computerScore) return `It's a tie`;
        else return `Computer is winning: ${this.computerScore}`;
    },

    reset () {
        this.playerScore = 0;
        this.computerScore = 0;
    },
}

rps.playRound("scissor");
console.log(rps["getWinningPlayer"]());

rps.playRound("rock");
console.log(rps["getWinningPlayer"]());

rps.playRound("paper");
console.log(rps["getWinningPlayer"]());

console.log(`Player Score: ${rps.playerScore}\nComputer Score: ${rps.computerScore}`);

rps["reset"]();

console.log("Score after reset:-");
console.log(`Player Score: ${rps.playerScore}\nComputer Score: ${rps.computerScore}`);
