//primary animation

const primaryHover = (event) => {
    const targetText = event.target.textContent;
    const imgChanger= document.querySelector("#img-container img");



    document.querySelector("#img-container h1").style.display = "none";
    imgChanger.style.display = "";

    imgChanger.src = `../resources/img/${targetText.toLowerCase()}.svg`;
    imgChanger.alt = targetText.toLowerCase();

    document.querySelector("#img-container").style.boxShadow = "10px 10px 5px 0px rgba(2,2,2,1)"



    

};

const primaryHoverOut = (event) => {
    document.querySelector("#img-container").style.boxShadow = "";
}

export { primaryHover, primaryHoverOut };