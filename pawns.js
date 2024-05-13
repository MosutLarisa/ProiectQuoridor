let players = [];

function createPlayer(row, col, color) {
    return {
        position: { row, col },
        color,
    };
}

function initPlayers() {
    players.push(createPlayer(BOARD_SIZE - 1, Math.floor(BOARD_SIZE / 2), color("#B67C90")));
    players.push(createPlayer(0, Math.floor(BOARD_SIZE / 2), color("#82A8C7")));
}

function drawPlayer(position, color) {
    let x = position.col * (CELL_SIZE + BORDER_SIZE) + CELL_SIZE / 2; // Coordonata X a centrului cercului
    let y = position.row * (CELL_SIZE + BORDER_SIZE) + CELL_SIZE / 2; // Coordonata Y a centrului cercului
    fill(color);
    ellipse(x, y, CELL_SIZE * 0.6);
}



