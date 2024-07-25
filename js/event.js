//primary
import { primaryHover, primaryHoverOut, startGameAnimation } from './animation.js';
import { gameScreen, game } from './game.js';

const frontHeading = document.querySelector("#front-heading");
const startButton = document.querySelector("#primary button");
const playerOptions = document.querySelector("#img-gesture-player");


const playerHandGesture = playerOptions.addEventListener('click', e => {
    const playerChoiceId = e.target.id;
    const playerChoice = playerChoiceId.split("-").pop();
    
    if (playerChoice === 'rock' ||
        playerChoice === 'paper' ||
        playerChoice === 'scissor' ) {
            return (playerChoice);
        }
});



frontHeading.addEventListener('mouseover', (e) => primaryHover(e));
frontHeading.addEventListener('mouseout', (e) => primaryHoverOut(e));





startButton.addEventListener('click', () => {
    startGameAnimation();
    startButton.addEventListener("animationend", () => {
        document.querySelector("#primary").style.display = "none";
    
        gameScreen();
    });
});


// const playerScore = document.querySelectorAll("#player-history img");

// document.querySelector("#player-history img:nth-child(5)").style.visibility = "visible";

