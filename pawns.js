let players = [];

function createPlayer(row, col, color) {
    return {
        position: { row, col },
        color,
    };
}

function initPlayers() {
    players.push(createPlayer(BOARD_SIZE - 1, Math.floor(BOARD_SIZE / 2), color("red")));
    players.push(createPlayer(0, Math.floor(BOARD_SIZE / 2), color("green")));
}

function drawPlayer(position, color) {
    fill(color);
    noStroke();
    ellipse((position.col + 0.5) * CELL_SIZE, (position.row + 0.5) * CELL_SIZE, CELL_SIZE * 0.6);
}



