const RESET_BUTTON_COLOR = "#82ADA9";
const RESET_BUTTON_FONT_SIZE = "30px";
const RESET_BUTTON_POSITION = {
    x: 750,
    y: 100,
};
const PLAYER_DEFAULT_POSITION_X = BOARD_SIZE / 2;

function createResetButton() {
    let resetButton = createButton('RESET');
    resetButton.style('font-size', RESET_BUTTON_FONT_SIZE);
    resetButton.style('background-color', color(RESET_BUTTON_COLOR));
    resetButton.position(RESET_BUTTON_POSITION.x, RESET_BUTTON_POSITION.y);
    resetButton.mousePressed(resetGame);
}

function resetGame() {
    resetPosition();
    resetWalls();
    wallCount = 0; 
    if (!nameFieldsEmpty()) {
        inputPlayer1.value("");
        inputPlayer2.value("");
    }
    winnerName = "";
    gameWon = false;
}
function resetPosition() {
    currentPlayerIndex = 0;
    
    players[0].position = {
        row: BOARD_SIZE - 1,
        col: PLAYER_DEFAULT_POSITION_X,
    };
    players[1].position = {
        row: 1,
        col: PLAYER_DEFAULT_POSITION_X,
    };
}

function resetWalls() {
   
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            walls[i][j] = [false, false, false, false]; 
        }
    }
}
