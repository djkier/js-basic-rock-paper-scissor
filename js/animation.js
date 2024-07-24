//primary animation


const imgContainer = document.querySelector("#img-container");
const image = document.querySelector("#img-container img");
const h1Children = document.querySelectorAll("#front-heading h1");
const headingIcon = document.querySelector("#heading-icon");
const playGameButton = document.querySelector("#primary button")


const primaryHover = (event) => {
    const targetText = event.target.textContent;

    document.querySelector("#img-container h1").style.display = "none";

    image.style.display = "";
    if (targetText === "ROCK" || targetText === "PAPER" || targetText === "SCISSOR") {
        image.src = `../resources/img/${targetText.toLowerCase()}.svg`;
        image.alt = targetText.toLowerCase();
    }
    
    image.style.animation = "shaking 0.7s ease-in-out infinite";

    imgContainer.style.boxShadow = "10px 10px 5px 0px rgba(2,2,2,1)"

};

const primaryHoverOut = (event) => {
    imgContainer.style.boxShadow = "";
    image.style.animation = '';
};


const startGameAnimation = () => { 


    for (let i = 0; i < h1Children.length; i++) {
        h1Children[i].style.animation = `negXTranslate ${0.8 + (i * 0.6)}s ease-out`;
        h1Children[i].addEventListener("animationend", () => {
            h1Children[i].style.visibility = "hidden";
            headingIcon.style.visibility = "hidden";
        });
    }

    headingIcon.style.animation = `posXTranslate 1.4s ease-out`;
    
    playGameButton.style.animation = `shrink 1.2s ease-in-out`;
    
   
};

export { primaryHover, primaryHoverOut, startGameAnimation };