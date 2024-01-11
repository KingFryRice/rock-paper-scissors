// Establish array for computer choice

const computerChoices = ["rock", "paper", "scissor"];

// Create function for computer choice to randomly return array element

function getComputerChoice() {
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

// Create function to evaluate computer choice and player choice and declare a winner with string and display in console
    // Establish players choice through prompt input
    // Players entry is not case sensitive 
    // Ties are redos

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        return "Congrats, you won this round!";
    } else if (playerSelection === computerSelection) {
        return "Let's try that again."
    } else {
        return "I got you this round!";
    }
}    

let playerSelection = prompt("Rock, Paper, Scissor ... Shoot!").toLowerCase();
let computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// Loop game until computer or player wins at least 3 games


// Either player or computer declared winner after game is over