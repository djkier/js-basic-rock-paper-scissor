//primary
import { primaryHover, primaryHoverOut, startGameAnimation } from './animation.js';


const frontHeading = document.querySelector("#front-heading");
const startButton = document.querySelector("#primary button");

frontHeading.addEventListener('mouseover', (e) => primaryHover(e));
frontHeading.addEventListener('mouseout', (e) => primaryHoverOut(e));
startButton.addEventListener('click', startGameAnimation);


