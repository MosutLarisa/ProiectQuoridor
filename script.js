
function mousePressed() {
    let col = Math.floor(mouseX / POSITION_MULTIPLIER);
    let row = Math.floor(mouseY / POSITION_MULTIPLIER);
    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
        walls[row][col] = true;
    }
}

function setup() {
    createCanvas(1425, 800);
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
    fill("#E0A872");
    text('Jucător 2:', 350, 20);
    fill("#C59A96");
    text('Jucător 1:', 350, 725);

    if (nameFieldsEmpty()) {
        let currentPlayerText = currentPlayerIndex === 0 ? "Jucător 2 his turn" : "Jucător 1 his turn";
        text(currentPlayerText, 20, height - 20);
    } else {
        let currentPlayerText = currentPlayerIndex === 0 ? inputPlayer2.value() + " 's turn" : inputPlayer1.value() + "'s turn";
        text(currentPlayerText, 20, height - 20);
    }

    if (gameWon) {
        displayWinMessage();
    }
}