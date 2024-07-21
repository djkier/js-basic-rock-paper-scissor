let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const validResponse = ['Rock', 'Paper', 'Scissor'];
    let random = Math.floor(Math.random() * 3)
    return validResponse[random];
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
    if (humanChoice === 'rock' && lowerCaseComp === 'scissor' ||
        humanChoice === 'paper' && lowerCaseComp === 'rock' ||
        humanChoice === 'scissor' && lowerCaseComp === 'paper') {
        console.log("You Win, " + humanChoice + " beats " + lowerCaseComp +".");
        humanScore += 1;
    } else if (lowerCaseComp === 'rock' && humanChoice === 'scissor' ||
        lowerCaseComp === 'paper' && humanChoice === 'rock' ||
        lowerCaseComp === 'scissor' && humanChoice === 'paper') {
        console.log("You Lose, " + lowerCaseComp + " beats " + humanChoice +".");
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
        }
        if (computerScore === 5) {
            console.log("Computer Wins!!! This is the start of Computer race!");
        }

       
    } 
    
}




// function gameFlow() {
//     playGame();
//     let playAgain = prompt("Do You want to play again? Type 'YES' or 'NO' only on the prompt");
//     while (true) {
//         let response = playAgain.toLowerCase();
//         if(response === 'yes') {
//             playGame();
//         } else if (response === 'no') {
//             console.log("Thanks For Playing!");
//             return;
//         } else {
//             alert("You enter an invalid response!")
//         }
//         playAgain = prompt("Do You want to play again? Type 'YES' or 'NO' only on the prompt");
//     } 

// };


// gameFlow();
