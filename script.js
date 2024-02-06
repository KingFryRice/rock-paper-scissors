const computerChoices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

const buttons = document.querySelectorAll("button");

function getPlayerChoice() {
    buttons.forEach(button => {
    button.addEventListener("click", () =>  {
        return button.className;
        });
    });
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        playerScore ++;
        return "Congrats, you won this round!";
    } else if (playerSelection === computerSelection) {
        return "Let's try that again."
    } else {
        computerScore ++;
        return "I got you this round!";
    }
}    

function game() {
    do {
        playRound();
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore + " | Computer Score " + computerScore);
    } while (playerScore < 3 && computerScore < 3);
}
    
function endGame() {
    if (playerScore === 3) {
        console.log("Great job you've bested me! Refresh to play, I won't lose again!.");
    } if (computerScore === 3) 
        console.log("Better luck next time, refresh if you want to try again!");
}

game();
//endGame();
