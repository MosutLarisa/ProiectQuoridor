const BOARD_SIZE = 9;
const CELL_SIZE = 70;

function setup() {
    createCanvas(1000, 800);
    initPlayers();
}

function draw() {
    background("white");

    drawBoard();
    for (let player of players) {
        drawPlayer(player.position, player.color);
    }
}