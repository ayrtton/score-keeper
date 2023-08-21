let maximumScore = 10;
const playerScores = [0, 0];
const score = document.getElementById("score");

function increaseScore(player) {
    playerScores[player]++;
    score.innerText = `${playerScores[0]} to ${playerScores[1]}`;

    if(playerScores[player] >= maximumScore) {
        window.alert(`Player ${player + 1} is the winner!`);
        reset();
    }
}

function reset() {
    playerScores[0] = playerScores[1] = 0;
    score.innerText = "0 to 0";
}

function main() {
    const player01Button = document.getElementById("player01Button");
    const resetButton = document.getElementById("resetButton");

    player01Button.addEventListener("click", () => { increaseScore(0); });
    player02Button.addEventListener("click", () => { increaseScore(1); });
    resetButton.addEventListener("click", () => { reset() });
}

main();