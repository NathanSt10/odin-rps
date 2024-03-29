
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

// function getPlayerChoice() {
//     let choice = prompt("Rock, Paper, Scissors, Shoot!");
//     choice = choice.toLowerCase();
//     return choice[0].toUpperCase() + choice.slice(1);
// }

function playerWins(playerChoice, computerChoice) {
    if (playerChoice === "Rock") {
        return (computerChoice === "Scissors");
    }
    else if (playerChoice === "Paper") {
        return (computerChoice === "Rock");
    }
    else {
        return (computerChoice === "Paper");
    }
}

function playRound(playerChoice, computerChoice) {
    const body = document.querySelector("body");
    const div = document.querySelector("div");
    // const displayResult = document.createElement("div");
    if (playerChoice === computerChoice) {
        div.textContent = "It's a Draw! You both threw " + playerChoice;
    }
    else if (playerWins(playerChoice, computerChoice)) {
        div.textContent = "You Win! " + playerChoice + " beats " + computerChoice;
    }
    else {
        div.textContent = "You Lose! " + computerChoice + " beats " + playerChoice;
    }
    console.log(div);
    body.appendChild(div);
}

const btnRock = document.querySelector("#btn-rock");;

btnRock.addEventListener("click", () => {playRound("Rock", getComputerChoice());});

const btnPaper = document.querySelector("#btn-paper");

btnPaper.addEventListener("click", () => {playRound("Paper", getComputerChoice());});

const btnScissors = document.querySelector("#btn-scissors");

btnScissors.addEventListener("click", () => {playRound("Scissors", getComputerChoice());});

// function playGame(rounds) {
//     let draw = win = loss = 0;
//     for (let i = 0; i < rounds; ++i) {
//         let playerChoice = getPlayerChoice()
//         let computerChoice = getComputerChoice();
//         outcome = playRound(playerChoice, computerChoice);
//         if (outcome === 0) {
//             console.log("It's a Draw! You both threw " + playerChoice);
//             ++draw;
//         }
//         if (outcome === 1) {
//             console.log("You Win! " + playerChoice + " beats " + computerChoice);
//             ++win;
//         }
//         if (outcome === -1) {
//             console.log("You Lose! " + computerChoice + " beats " + playerChoice);
//             ++loss;
//         }
//     }
//     if (win > loss) {
//         console.log("Congrats you won! You beat the computer " + win + " to " + loss + "!")
//     }
//     else if (win === loss) {
//         console.log("The game concluded but there are no winners, you both drew... " + draw + " time(s)...")
//     }
//     else {
//         console.log("Darn you lost " + win + " to " + loss + ", better luck next time!")
//     }
// }

// playGame(parseInt(prompt("How many rounds would you like to play? ")));