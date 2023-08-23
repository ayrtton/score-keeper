let maximumScore = 0;
const playerScores = [0, 0];
const score = document.getElementById("score");

const startButton = document.getElementById("startButton");
const player01Button = document.getElementById("player01Button");
const player02Button = document.getElementById("player02Button");
const resetButton = document.getElementById("resetButton");

function start() {
    maximumScore = parseInt(document.getElementById("maximumScoreInput").value);

    startButton.hidden = true;
    player01Button.hidden = false;
    player02Button.hidden = false;
    resetButton.hidden = false;
}

function increaseScore(player) {
    playerScores[player]++;
    score.innerText = `${playerScores[0]} to ${playerScores[1]}`;

    if(playerScores[player] >= maximumScore) {
        window.alert(`Player ${player + 1} is the winner!`);
        reset();
    }
}

function reset() {
    maximumScore = playerScores[0] = playerScores[1] = 0;
    score.innerText = "0 : 0";

    startButton.hidden = false;
    player01Button.hidden = true;
    player02Button.hidden = true;
    resetButton.hidden = true;
}

function main() {
    startButton.addEventListener("click", () => { start(); });
    player01Button.addEventListener("click", () => { increaseScore(0); });
    player02Button.addEventListener("click", () => { increaseScore(1); });
    resetButton.addEventListener("click", () => { reset() });
}

main();