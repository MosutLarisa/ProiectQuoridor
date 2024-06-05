let gameWon = false;

function displayWinMessage() {
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(winnerName + " has won the game!", width / 2, height / 2);
    pop();
}
