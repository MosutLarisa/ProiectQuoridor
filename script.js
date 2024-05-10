const BOARD_SIZE = 9;
const CELL_SIZE = 70;

function setup() {
    createCanvas(1200, 800);
    initPlayers();
    button();
    player();
}

function draw() {
    background("white");

    drawBoard();
    for (let player of players) {
        drawPlayer(player.position, player.color);
    }
    fill(0);
    text('Jucător 1:', 800, 80);
    text('Jucător 2:', 800, 180);
}