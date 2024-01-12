// Establish array for computer choice
    // Create function for computer choice to randomly return array element

const computerChoices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

// Loop game until computer or player wins at least 3 games
    // Either player or computer declared winner after game is over

function game() {
    do {
        playerSelection = prompt("Rock, Paper, Scissor ... Shoot!").toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore + " | Computer Score " + computerScore);
    } while (playerScore < 3 && computerScore < 3);
}

// Create function to evaluate computer choice and player choice and declare a winner with string and display in console
    // Establish players choice through prompt input

let playerSelection
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        playerScore++;
        return "Congrats, you won this round!";
    } else if (playerSelection === computerSelection) {
        return "Let's try that again."
    } else {
        computerScore++;
        return "I got you this round!";
    }
}    

game();