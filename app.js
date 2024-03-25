
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors, Shoot!");
    choice = choice.toLowerCase();
    return choice[0].toUpperCase() + choice.slice(1);
}

function playerWins(playerChoice, computerChoice) {
    if (playerChoice === "Rock") {
        return (computerChoice === "Scissors")
    }
    else if (playerChoice === "Paper") {
        return (computerChoice === "Rock")
    }
    else {
        return (computerChoice === "Paper")
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a Draw! You both threw " + playerChoice;
    }
    else if (playerWins(playerChoice, computerChoice)) {
        return "You Win! " + playerChoice + " beats " + computerChoice;
    }
    else {
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));