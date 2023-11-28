const choice = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(computerSelection, playerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection == "scissors"){
            return "You Win! Scissors beats Rock";
        }
        else{
            return "It's a Tie!";
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "It's a Tie!";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "You Win! Scissors beats Paper";
        }
        else if(computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }
        else{
            return "It's a Tie!";
        }
    }
}

let playerSelection;
let computerSelection;

function game(){
    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choice: ");
        console.log(playRound(computerSelection, playerSelection));
    }
}
game();