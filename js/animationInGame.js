

const roundNumber = document.querySelector('#round');
const winnerWins = document.querySelector("#round-winner-choice h3");
const winnerImgChoice = document.querySelector("#round-winner-choice img");



const perRoundAnimation = (roundInfo) => {
    
    roundNumber.textContent = `Round ${roundInfo.round}`;
    console.log(roundInfo.outcome);
    if (roundInfo.outcome !== "draw") {
        const winner = roundInfo.outcome;
        const addImage = document.querySelector(`#${winner}-history`);
        const imageAttr = addImage.appendChild(document.createElement("img"));
        imageAttr.src = `./resources/img/${roundInfo[winner]}.svg`;
        imageAttr.alt = roundInfo[winner];
        
        winnerWins.textContent = `${winner.slice(0, 1).toUpperCase() + winner.slice(1)} Wins`;
        winnerImgChoice.src = `./resources/img/${roundInfo[winner]}.svg`;

        if (roundInfo[winner] === 'scissor') {
            imageAttr.style.width = "28px";
            winnerImgChoice.style.width = "80px";
        } else {
            imageAttr.style.width = "34px";
            winnerImgChoice.style.width ="115px";
        }
        
   
    } else {
        winnerWins.textContent = "Draw";
        winnerImgChoice.src = `./resources/img/${roundInfo.player}.svg`;
        winnerImgChoice.style.width = `${roundInfo.player === "scissor" ? "80px" : "115px"}`;
    }
 
    


};

const endScreen = () => {
    alert("Someone Wins");
};

export { perRoundAnimation, endScreen }