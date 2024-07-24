//primary
import { primaryHover, primaryHoverOut, startGameAnimation } from './animation.js';
import { gameScreen } from './game.js';

const frontHeading = document.querySelector("#front-heading");
const startButton = document.querySelector("#primary button");

frontHeading.addEventListener('mouseover', (e) => primaryHover(e));
frontHeading.addEventListener('mouseout', (e) => primaryHoverOut(e));
startButton.addEventListener('click', () => {
    startGameAnimation();
    startButton.addEventListener("animationend", () => {
        document.querySelector("#primary").style.display = "none";
        gameScreen();
    });
   

});


