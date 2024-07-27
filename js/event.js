//primary
import { primaryHover, primaryHoverOut, startGameAnimation } from './animation.js';
import { gameScreen, game } from './game.js';

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



document.querySelector("#round").addEventListener('animationend', () => {
    console.log("End of Round Animation");
})

rulesButton.addEventListener('click', () => {
    document.querySelector('#game-rules-overlay').style.display = "block";
});

closeButton.addEventListener('click', () => {
    document.querySelector('#game-rules-overlay').style.display = "none";
});



