
const roundNumber = document.querySelector('#round');
const winnerWins = document.querySelector("#round-winner-choice h3");
const winnerImgChoice = document.querySelector("#round-winner-choice img");
const tbody = document.querySelector("#match-history-results tbody");



const perRoundAnimation = (roundInfo) => {
    roundNumber.textContent = `Round ${roundInfo.round}`;

    if (roundInfo.outcome !== "draw") {
        const winner = roundInfo.outcome;
        const addImage = document.querySelector(`#${winner}-history`);
        const imageAttr = addImage.appendChild(document.createElement("img"));
        imageAttr.src = `./resources/img/${roundInfo[winner]}.svg`;
        imageAttr.alt = roundInfo[winner];
        
        winnerWins.textContent = `${winner.slice(0, 1).toUpperCase() + winner.slice(1)} Wins`;
        winnerImgChoice.src = `./resources/img/${roundInfo[winner]}.svg`;
        winnerImgChoice.alt = roundInfo[winner];

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




const matchHistory = (array) => {
    const keys = Object.keys(array[0]);
    
    array.forEach(item => {
        const newTr = document.createElement("tr");

        keys.forEach(key => {
           
            const newTd =document.createElement("td");
            if (key === "player" || key === "computer") {
                const newImg = document.createElement("img");
                newImg.src = `./resources/img/${item[key]}.svg`;
                newImg.alt = item[key];
                newTd.appendChild(newImg);
            } else if (key === "outcome") {
                newTd.textContent = `${item[key].slice(0, 1).toUpperCase() + item[key].slice(1)}`;
            } else {
                newTd.textContent = item[key];
            }

            newTr.appendChild(newTd);

            if (item[key] === "player") {
                newTr.style.backgroundColor = "rgb(155, 255, 171)";
            } else if (item[key] === "computer") {
                newTr.style.backgroundColor = "rgb(255, 155, 155)";
            }
        });
        tbody.appendChild(newTr);    
    });
    
}

const gameScreenReset = () => {
    roundNumber.textContent = `Pick Your Choice`;
    winnerWins.textContent = '';
    winnerImgChoice.src = '';
    winnerImgChoice.alt = ''
    document.querySelector(`#player-history`).replaceChildren();
    document.querySelector(`#computer-history`).replaceChildren();
    tbody.replaceChildren();
    
}

export { perRoundAnimation, matchHistory, gameScreenReset }