let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

const computerChoices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

const rock = document.querySelector(".rock");
rock.addEventListener('click', () => {
    console.log(rock.className);
});
const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
    console.log(paper.className);
});
const scissor = document.querySelector(".scissor");
scissor.addEventListener('click', () => {
    console.log(scissor.className);
});

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

// game();
// endGame();
