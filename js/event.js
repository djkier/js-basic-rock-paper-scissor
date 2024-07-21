//primary
import { primaryHover, primaryHoverOut } from './animation.js';


const frontHeading = document.querySelector("#front-heading");

frontHeading.addEventListener('mouseover', (e) => primaryHover(e));
frontHeading.addEventListener('mouseout', (e) => primaryHoverOut(e));


