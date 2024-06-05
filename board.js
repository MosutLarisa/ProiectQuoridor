const BOARD_SIZE = 10;
const CELL_SIZE = 60;
const CELL_COLOR = "#C5BDBA";
const WALL_COLOR = "#FFFF00";
let wallSide = 'top';
let wallPlaced = false;
let wallCount = 0;
let lastCell = null;
let walls = new Array(BOARD_SIZE).fill(false).map(() => new Array(BOARD_SIZE).fill(false).map(() => new Array(4).fill(false)));

function drawBoard() {
    for (let row = 1; row < BOARD_SIZE; row++) {
        for (let col = 1; col < BOARD_SIZE; col++) {
            drawCell(row, col);

        }
    }

}

function drawCell(row, col) {
    let x = col * POSITION_MULTIPLIER;
    let y = row * POSITION_MULTIPLIER;
    fill(CELL_COLOR);
    stroke(WALL_COLOR);
    strokeWeight(10);
    if (walls[row][col][0]) line(x, y, x + CELL_SIZE, y);
    if (walls[row][col][1]) line(x + CELL_SIZE, y, x + CELL_SIZE, y + CELL_SIZE);
    if (walls[row][col][2]) line(x, y + CELL_SIZE, x + CELL_SIZE, y + CELL_SIZE);
    if (walls[row][col][3]) line(x, y, x, y + CELL_SIZE);
    noStroke();
    rect(x, y, CELL_SIZE, CELL_SIZE);
    strokeWeight(1);
}

function mousePressed() {
    let col = Math.floor(mouseX / POSITION_MULTIPLIER);
    let row = Math.floor(mouseY / POSITION_MULTIPLIER);

    if (wallPlaced || wallCount >= 20) return;

    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
        let wallIndex = wallSideToIndex(wallSide);
        // Check if a wall has already been placed on that side
        if (walls[row][col][wallIndex]) {
            alert("A wall already exists here!");
            return;
        }

        walls[row][col][wallIndex] = true;
        wallPlaced = true;

        // Increment the wall count only when a new cell is clicked
        if (!lastCell || lastCell.row !== row || lastCell.col !== col) {
            wallCount++;
        }

        // Update the last cell clicked
        lastCell = { row, col, side: wallSide };
    }
}

function wallSideToIndex(side) {
    switch (side) {
        case 'top':
            return 0;
        case 'right':
            return 1;
        case 'bottom':
            return 2;
        case 'left':
            return 3;
        default:
            return -1;
    }
}
document.querySelector('#top').addEventListener('click', () => wallSide = 'top');
document.querySelector('#bottom').addEventListener('click', () => wallSide = 'bottom');
document.querySelector('#left').addEventListener('click', () => wallSide = 'left');
document.querySelector('#right').addEventListener('click', () => wallSide = 'right');


function newTurn() {
    wallPlaced = false;
    lastCell = null;
}

function move(direction) {
    let newRow = currentRow;
    let newCol = currentCol;
    let wallIndex;

    switch (direction) {
        case 'up':
            newRow--;
            wallIndex = wallSideToIndex('top');
            break;
        case 'down':
            newRow++;
            wallIndex = wallSideToIndex('bottom');
            break;
        case 'left':
            newCol--;
            wallIndex = wallSideToIndex('left');
            break;
        case 'right':
            newCol++;
            wallIndex = wallSideToIndex('right');
            break;
    }

    // Check if the move is valid
    if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE) {
        // Check if there's a wall in the direction of the move
        if (!walls[currentRow][currentCol][wallIndex]) {
            currentRow = newRow;
            currentCol = newCol;
        }
    }
}
