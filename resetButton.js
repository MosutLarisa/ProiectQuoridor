let resetButton;

function button(){
    
    let resetButton = createButton('Reset');
    resetButton.style('font-size', '30px');
    resetButton.style('background-color', color("#82ADA9"));
    //resetButton.style('color', "#4B3A34");
    resetButton.position(800, 100);
    resetButton.mousePressed(resetGame);
}

function resetGame() {
    players[0].position = { row: BOARD_SIZE - 1, col: Math.floor(BOARD_SIZE / 2) };
    players[1].position = { row: 1, col: Math.floor(BOARD_SIZE / 2) };
}