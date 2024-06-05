
function mousePressed() {
    let col = Math.floor(mouseX / POSITION_MULTIPLIER);
    let row = Math.floor(mouseY / POSITION_MULTIPLIER);
    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
        walls[row][col] = true;
    }
}

function setup() {
    createCanvas(1650, 870);
    drawNameFields();
    initPlayers();
    createResetButton();
    
}

function draw() {
    background("#796F6B" );
    fill("#423732"); // Setează culoarea de umplere a tablei
    square(60, 60, 645); // Desenează un pătrat la coordonatele sale

    drawBoard();
    for (let player of players) {
        drawPlayer(player.position, player.color);
    }
fill("black")
    if (nameFieldsEmpty()) {
        let currentPlayerText = currentPlayerIndex === 0 ? "Jucător 2 his turn" : "Jucător 1 his turn";
        text(currentPlayerText, 20, height - 20);
    } else {
        let currentPlayerText = currentPlayerIndex === 0 ? inputPlayer2.value() + " 's turn" : inputPlayer1.value() + "'s turn";
        text(currentPlayerText, 20, height - 20);
    }
    playerText();
    title();
    
    if (gameWon) {
        displayWinMessage();
    }
}