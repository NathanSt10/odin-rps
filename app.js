let playerCount = computerCount = 0;

const btnRock = document.querySelector("#btn-rock");;
btnRock.addEventListener("click", () => {playRound("Rock", getComputerChoice());});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {playRound("Paper", getComputerChoice());});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {playRound("Scissors", getComputerChoice());});

const body = document.querySelector("body");
const divRoundResult = document.querySelector("#roundResult");
const divButtonContainer = document.querySelector(".button-container");
const divGameResult = document.querySelector("#gameResult");
const score = document.querySelector("#score");


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

    if (playerChoice === computerChoice) {
        divRoundResult.textContent = "It's a Draw! You both threw " + playerChoice;
    }
    else if (playerWins(playerChoice, computerChoice)) {
        divRoundResult.textContent = "You Win! " + playerChoice + " beats " + computerChoice;
        ++playerCount;
        score.textContent = "" + playerCount + " - " + computerCount;
    }
    else {
        divRoundResult.textContent = "You Lose! " + computerChoice + " beats " + playerChoice;
        ++computerCount;
        score.textContent = "" + playerCount + " - " + computerCount;
    }
    
    if (playerCount === 5) {
        divGameResult.textContent = "Congrats You Win! " + playerCount + " to " + computerCount + "!";
    }
    if (computerCount === 5) {
        divGameResult.textContent = "Sorry you lost " + playerCount + " to " + computerCount + ", better luck next time!";
    }
}