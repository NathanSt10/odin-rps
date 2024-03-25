
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

function playRound(playerChoice, computerChoice) {

}

console.log(playRound(getPlayerChoice(), getComputerChoice()));