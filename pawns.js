let players = [];
let currentPlayerIndex = 0;
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

function keyPressed() {
    const player = players[currentPlayerIndex];
    let newRow = player.position.row;
    let newCol = player.position.col;

    if (keyCode === UP_ARROW && newRow > 0) {
        newRow--;
    } else if (keyCode === DOWN_ARROW && newRow < BOARD_SIZE - 1) {
        newRow++;
    } else if (keyCode === LEFT_ARROW && newCol > 0) {
        newCol--;
    } else if (keyCode === RIGHT_ARROW && newCol < BOARD_SIZE - 1) {
        newCol++;
    }

    if (isValidMove(newRow, newCol)) {
        player.position.row = newRow;
        player.position.col = newCol;
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    }
}

function isValidMove(row, col) {
    for (let player of players) {
        if (player.position.row == row && player.position.col == col) {
            return false; // Nu putem ocupa aceeași poziție cu alt jucător
        }
    }
    return true;
}



