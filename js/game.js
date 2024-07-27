import { endScreen, perRoundAnimation } from './animationInGame.js'


let playerScore = 0;
let computerScore = 0;
let history = [];

let round = 0


function computerChoice() {
    const validResponse = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * 3)
    return validResponse[random];
}



function playRound (human, computer) {
    if (human === computer) {
        return "draw";
    } else if (human === 'rock' && computer === 'scissor' ||
        human === 'paper' && computer === 'rock' ||
        human === 'scissor' && computer === 'paper') {
            playerScore += 1;
            return "player";
    } else {
            computerScore += 1;
            return "computer";
    }

}


const game = (playerChoice) => {
    const roundOutcome = {
        round: null,
        player: null,
        computer: null,
        outcome: null
    };
    round ++;
    roundOutcome.round = round;
    roundOutcome.player = playerChoice;
    roundOutcome.computer = computerChoice();
    roundOutcome.outcome = playRound(roundOutcome.player, roundOutcome.computer);
    history.push(roundOutcome);
  
    perRoundAnimation(roundOutcome);


    if (playerScore === 5 || computerScore === 5) {
        endScreen(); //from animation.js
    }


}

const gameScreen = () => {
    document.querySelector("#main-game").style.display = "flex";
}

export { gameScreen, game }; 