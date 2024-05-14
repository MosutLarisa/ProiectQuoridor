function drawBoard() {

    for (let row = 1; row < BOARD_SIZE; row++) {
        for (let col = 1; col < BOARD_SIZE; col++) {
            let x = col * (CELL_SIZE + BORDER_SIZE); // Coordonata X pentru fiecare pătrat
            let y = row * (CELL_SIZE + BORDER_SIZE); // Coordonata Y pentru fiecare pătrat
            fill("#C5BDBA");
            rect(x, y, CELL_SIZE, CELL_SIZE);
        }
    }

}