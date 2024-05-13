function drawBoard() {

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            let x = col * (CELL_SIZE + BORDER_SIZE); // Coordonata X pentru fiecare pătrat
            let y = row * (CELL_SIZE + BORDER_SIZE); // Coordonata Y pentru fiecare pătrat
            noFill();
            rect(x, y, CELL_SIZE, CELL_SIZE);
        }
    }

}