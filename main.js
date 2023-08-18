let maximumScore = 10;
let player01Score = 0;
let player02Score = 0;

function main() {
    const player01Button = document.getElementById("player01Button");
    const resetButton = document.getElementById("resetButton");

    player01Button.addEventListener("click", () => { player01Score++; });
    player02Button.addEventListener("click", () => { player02Score++; });
    resetButton.addEventListener("click", () => { player01Score = player02Score = 0; });
}

main();