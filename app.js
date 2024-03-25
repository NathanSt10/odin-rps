
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
        return 0//"It's a Draw! You both threw " + playerChoice;
    }
    else if (playerWins(playerChoice, computerChoice)) {
        return 1//"You Win! " + playerChoice + " beats " + computerChoice;
    }
    else {
        return -1//"You Lose! " + computerChoice + " beats " + playerChoice;
    }
}

function playGame(rounds) {
    let draw = win = loss = 0;
    for (let i = 0; i < rounds; ++i) {
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice();
        outcome = playRound(playerChoice, computerChoice);
        if (outcome === 0) {
            console.log("It's a Draw! You both threw " + playerChoice);
            ++draw;
        }
        if (outcome === 1) {
            console.log("You Win! " + playerChoice + " beats " + computerChoice);
            ++win;
        }
        if (outcome === -1) {
            console.log("You Lose! " + computerChoice + " beats " + playerChoice);
            ++loss;
        }
    }
    if (win > loss) {
        console.log("Congrats you won! You beat the computer " + win + " to " + loss + "!")
    }
    else if (win === loss) {
        console.log("The game concluded but there are no winners, you both drew... " + draw + " time(s)...")
    }
    else {
        console.log("Darn you lost " + win + " to " + loss + ", better luck next time!")
    }
}

playGame(parseInt(prompt("How many rounds would you like to play? ")));