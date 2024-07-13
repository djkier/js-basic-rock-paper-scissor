let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const validResponse = ['Rock', 'Paper', 'Scissor'];
    let random = Math.floor(Math.random() * 3)
    return validResponse[random];
}

function validResponse(response) {
    let gesture = response.toLowerCase();
    while (gesture !== 'rock' && gesture !== 'paper' && gesture !== 'scissor') {
        alert("Enter a valid choice!");
        let enterAgain = prompt("Choose: Rock, Paper or Scissor");
        gesture = enterAgain.toLowerCase();
    }
    return gesture;
}


function getHumanChoice() {
    let humanHandGesture = prompt("Choose: Rock, Paper or Scissor");
    let gesture = humanHandGesture.toLowerCase();

    while (gesture !== 'rock' && gesture !== 'paper' && gesture !== 'scissor') {
        alert("Enter a valid choice!");
        let enterAgain = prompt("Choose: Rock, Paper or Scissor");
        gesture = enterAgain.toLowerCase();
    }

    return gesture;


    

    
}

function playRound (humanChoice, computerChoice) {
    let lowerCaseComp = computerChoice.toLowerCase();
    if (humanChoice === 'rock' && lowerCaseComp === 'scissor') {
        console.log("You Win! Rock beats Scissor");
        humanScore += 1;
    } else if (humanChoice === 'paper' && lowerCaseComp === 'rock') {
        console.log("You Win! Paper beats Rock");
        humanScore += 1;
    } else if (humanChoice === 'scissor' && lowerCaseComp === 'paper') {
        console.log("You Win! Scissor beats Paper");
        humanScore += 1;
    } else if (lowerCaseComp === 'rock' && humanChoice === 'scissor') {
        console.log("You Lose! Rock beats Scissor");
        computerScore += 1;
    } else if (lowerCaseComp === 'paper' && humanChoice === 'rock') {
        console.log("You Lose! Paper beats Rock");
        computerScore += 1;
    } else if (lowerCaseComp === 'scissor' && humanChoice === 'paper') {
        console.log("You Lose! Scissor beats Paper");
        computerScore += 1;
    } else {
        console.log("Draw!");
    }

}



function playGame() {
    humanScore = 0;
    computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human: " + humanScore + " vs. " + "Computer: " + computerScore);
        if (humanScore === 5 ) {
            console.log("Human Wins!!! Computer will be slave forever!");
            let playAgain = prompt("Do You want to play again? Type 'YES' on the prompt");
            return playAgain.toLowerCase() === "yes" ? playGame() : console.log("Ok Good Bye!");
            
        }
        if (computerScore === 5) {
            console.log("Computer Wins!!! This is the start of Computer race!");
            let playAgain = prompt("Do You want to play again? Type 'YES' on the prompt");
            return playAgain.toLowerCase() === "yes" ? playGame() : console.log("Ok Good Bye!");
            
        }

       
    } 
    

}

playGame();

