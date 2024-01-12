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
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
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

// Create function to evaluate computer choice and player choice and declare a winner with string and display in console

let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        playerScore += .5;
        return "Congrats, you won this round!";
    } else if (playerSelection === computerSelection) {
        return "Let's try that again."
    } else {
        computerScore += .5;
        return "I got you this round!";
    }
}    

game();
endGame();