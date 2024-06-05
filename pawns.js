let players = [];
let currentPlayerIndex = 0;
let winnerName = "";

const BORDER_SIZE = 10;
const POSITION_MULTIPLIER = CELL_SIZE + BORDER_SIZE;
const POSITION_OFFSET = CELL_SIZE / 2;

const DIRECTIONS = {
    UP: { row: -1, col: 0, },
    DOWN: { row: 1, col: 0, },
    LEFT: { row: 0, col: -1 },
    RIGHT: { row: 0, col: 1, },
};

function createPlayer(row, col, color) {
    return {
        position: { row, col },
        color,
    };
}

function initPlayers() {
    players.push(createPlayer(BOARD_SIZE - 1, Math.floor(BOARD_SIZE / 2), color("#C59A96")));
    players.push(createPlayer(1, Math.floor(BOARD_SIZE / 2), color("#E0A872")));
}

function drawPlayer(position, color) {
    let x = position.col * POSITION_MULTIPLIER + POSITION_OFFSET; // Coordonata X a centrului cercului
    let y = position.row * POSITION_MULTIPLIER + POSITION_OFFSET; // Coordonata Y a centrului cercului
    fill(color);
    ellipse(x, y, CELL_SIZE * 0.6);
}

function keyPressed() {
    if (gameWon) {
        return;
    }

    const player = players[currentPlayerIndex];
    const direction = getDirectionFromKeyCode(keyCode);
    if (!direction) {
        return;
    }

    const newRow = player.position.row + direction.row;
    const newCol = player.position.col + direction.col;

    // If a wall hasn't been placed this turn and the player has walls left, place a wall
    if (!wallPlaced && players[currentPlayerIndex].wallsLeft > 0 && isValidWall(newRow, newCol)) {
        switch (wallSide) {
            case 'top':
                walls[newRow][newCol][0] = true;
                break;
            case 'right':
                walls[newRow][newCol][1] = true;
                break;
            case 'bottom':
                walls[newRow][newCol][2] = true;
                break;
            case 'left':
                walls[newRow][newCol][3] = true;
                break;
        }
        wallPlaced = true; // A wall has been placed this turn
        players[currentPlayerIndex].wallsLeft--; // Decrease the number of walls left for the current player

    }

    if (!isValidMove(newRow, newCol)) {
        return;
    }

    player.position.row = newRow;
    player.position.col = newCol;

    if (checkWinCondition(player)) {
        gameWon = true;
        if (nameFieldsEmpty()) {
            winnerName = currentPlayerIndex === 0 ? "Jucător 2" : "Jucător 1";
        } else {
            winnerName = currentPlayerIndex === 0 ? inputPlayer2.value() : inputPlayer1.value();
        }
    } else {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        wallPlaced = false; // Reset wallPlaced for the next player's turn
    }
}

function getDirectionFromKeyCode(keyCode) {
    switch (keyCode) {
        case UP_ARROW:
            return DIRECTIONS.UP;
        case DOWN_ARROW:
            return DIRECTIONS.DOWN;
        case LEFT_ARROW:
            return DIRECTIONS.LEFT;
        case RIGHT_ARROW:
            return DIRECTIONS.RIGHT;
        default:
            return null;
    }
}

function isValidMove(newRow, newCol) {
    const player = players[currentPlayerIndex];
    const rowDiff = newRow - player.position.row;
    const colDiff = newCol - player.position.col;

    // Check if there's a wall in the direction the player is trying to move
    if (rowDiff === 1 && walls[player.position.row][player.position.col][2]) { // Moving down
        return false;
    } else if (rowDiff === -1 && walls[player.position.row][player.position.col][0]) { // Moving up
        return false;
    } else if (colDiff === 1 && walls[player.position.row][player.position.col][1]) { // Moving right
        return false;
    } else if (colDiff === -1 && walls[player.position.row][player.position.col][3]) { // Moving left
        return false;
    }

    // Check if the new position is within the board
    if (newRow < 1 || newRow >= BOARD_SIZE || newCol < 1 || newCol >= BOARD_SIZE) {
        return false;
    }

    return true;

}
function checkWinCondition(player) {
    return currentPlayerIndex === 0 && player.position.row === 1 || currentPlayerIndex === 1 && player.position.row === BOARD_SIZE - 1;
}
