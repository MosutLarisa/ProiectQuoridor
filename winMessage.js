let gameWon = false;

function displayWinMessage() {
    fill("#F1F3C4");
    rect(0, 320, 1500, 100);
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Foldit");
    textSize(70);
    text(winnerName + " has won the game!", width / 2, height / 2.1);
    pop();
}