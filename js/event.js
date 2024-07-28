//primary
import { primaryHover, primaryHoverOut, startGameAnimation } from './animation.js';
import { gameScoreReset, game } from './game.js';
import { gameScreenReset } from './animationInGame.js'


const frontHeading = document.querySelector("#front-heading");
const startButton = document.querySelector("#primary button");
const playerOptions = document.querySelector("#img-gesture-player");


playerOptions.addEventListener('click', e => {
    const playerChoiceId = e.target.id;
    const playerChoice = playerChoiceId.split("-").pop();
    
    if (playerChoice === 'rock' ||
        playerChoice === 'paper' ||
        playerChoice === 'scissor' ) {
            game(playerChoice);
        }
});



frontHeading.addEventListener('mouseover', (e) => primaryHover(e));
frontHeading.addEventListener('mouseout', (e) => primaryHoverOut(e));


//In Game Events
const rulesButton = document.querySelector('#rules button');
const closeButton = document.querySelector('#close-button button');


startButton.addEventListener('click', () => {
    startGameAnimation();
    startButton.addEventListener("animationend", () => {
        document.querySelector("#primary").style.display = "none";

        document.querySelector("#main-game").style.display = "flex";
    });
});



rulesButton.addEventListener('click', () => {
    document.querySelector('#game-rules-overlay').style.display = "block";
});

closeButton.addEventListener('click', () => {
    document.querySelector('#game-rules-overlay').style.display = "none";
});


// End Screen
const matchHistoryButton = document.querySelector("button#match-history");
const matchHistoryDisplay = document.querySelector("#match-history-results");
const playAgainButton = document.querySelector("#play-again");
const endScreenDisplay = document.querySelector("#end-screen");

matchHistoryButton.addEventListener('click', () => {
    
    if (matchHistoryDisplay.style.display === "none") {
        matchHistoryDisplay.style.display = "";
     
    } else {
        matchHistoryDisplay.style.display = "none";
    }
    
});

playAgainButton.addEventListener('click', () => {
    endScreenDisplay.style.animationName = "slideDown";
    endScreenDisplay.style.animationDuration = '2.5s';
    gameScoreReset();
    gameScreenReset();
    document.querySelector("#img-gesture-player").style.pointerEvents = "";

    setTimeout(() => {endScreenDisplay.style.display = "none"}, 1900);
    setTimeout(() => {document.querySelector("#main-game").style.display = "flex"}, 500);
    
    
    
    
})



