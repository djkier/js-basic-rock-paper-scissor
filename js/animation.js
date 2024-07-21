//primary animation
const imgContainer = document.querySelector("#img-container");
const image = document.querySelector("#img-container img");
const h1Children = document.querySelectorAll("#front-heading h1");

const primaryHover = (event) => {
    const targetText = event.target.textContent;

    document.querySelector("#img-container h1").style.display = "none";

    image.style.display = "";
    image.src = `../resources/img/${targetText.toLowerCase()}.svg`;
    image.alt = targetText.toLowerCase();
    image.style.animation = "shaking 0.7s ease-in-out infinite";

    imgContainer.style.boxShadow = "10px 10px 5px 0px rgba(2,2,2,1)"

};

const primaryHoverOut = (event) => {
    imgContainer.style.boxShadow = "";
    image.style.animation = '';
};

const startGameAnimation = () => { 
    console.log(h1Children.length);

    for (let i = 0; i < h1Children.length; i++) {
        h1Children[i].style.animation = `xTranslate ${0.8 + (i * 0.6)}s ease-out`;
        h1Children[i].addEventListener("animationend", () => {
            h1Children[i].style.visibility = "hidden";
        });
    }


    // h1Children.forEach(item => {
        
    //     item.style.animation = "xTranslate 1.2s ease-out";
    //     item.addEventListener("animationend", () => { h1FirstChild.style.visibility = "hidden";
    //     });
    // });

    
    
};

export { primaryHover, primaryHoverOut, startGameAnimation };