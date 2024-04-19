let resetButton;

function button(){
    
    let resetButton = createButton('Reset');
    resetButton.style('font-size', '30px');
    resetButton.style('background-color', color("yellow"));
    resetButton.position(270, 700);
    resetButton.mousePressed(resetGame);
}

function resetGame() {
    players[0].position = { row: BOARD_SIZE - 1, col: Math.floor(BOARD_SIZE / 2) };
    players[1].position = { row: 0, col: Math.floor(BOARD_SIZE / 2) };
}