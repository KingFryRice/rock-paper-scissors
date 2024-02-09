const buttons = document.querySelectorAll("button");
const choice = document.querySelector(".choice");
const result = document.querySelector(".round-result");
const playerScoreKeeper = document.querySelector(".player-score");
const computerScoreKeeper = document.querySelector(".computer-score");
const endGameResult = document.querySelector(".endgame");

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

playGame();

const computerChoices = ["rock", "paper", "scissor"];
function getComputerSelection() {
    computerSelection = computerChoices [Math.floor(Math.random() * computerChoices.length)];
    return computerSelection;
}

function playGame() {
    buttons.forEach(button => {
    button.addEventListener("click", () =>  {
        if (playerScore < 3 && computerScore < 3) {
            playerSelection = button.className;
            playRound(playerSelection);
            choice.textContent = "Computer chose: " + computerSelection;
        } if (playerScore === 3) {
            endGameResult.textContent = "Great job you've bested me! Refresh to play again, I won't lose this time!.";
        } else if (computerScore === 3) {
            endGameResult.textContent =  "Better luck next time, refresh if you want to try again!";
        }});
    });
};

function playRound(playerSelection) {
    computerSelection = getComputerSelection();
    if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        ++playerScore;
        result.textContent =  "Congrats, you won this round!";
    } else if (playerSelection === computerSelection) {
        result.textContent =  "Let's try that again.";
    } else {
        ++computerScore;
        result.textContent = "I got you this round!";
    }
    playerScoreKeeper.textContent = playerScore;
    computerScoreKeeper.textContent = computerScore;
}    