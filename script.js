const BOARD_SIZE = 10;
const CELL_SIZE = 60;
const BORDER_SIZE = 10;

function setup() {
    createCanvas(1425, 800);
    initPlayers();
    button();
    player();
}

function draw() {
    background("#796F6B" );
    fill("#423732"); // Setează culoarea de umplere a tablei
    square(60, 60, 645); // Desenează un pătrat la coordonatele sale


    drawBoard();
    for (let player of players) {
        drawPlayer(player.position, player.color);
    }
    fill("#E0A872");
    text('Jucător 1:', 350, 20);
    fill("#C59A96");
    text('Jucător 2:', 350, 725);
}