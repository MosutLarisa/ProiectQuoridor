let inputPlayer1, inputPlayer2;
const STARTPOS_PLAYER1 = {
    x: 280,
    y: 70,
};
const STARTPOS_PLAYER2 = {
    x: 280,
    y: 775,
};

const COLOR_PLAYER1 = "#E0A872";
const COLOR_PLAYER2 = "#C59A96";
const PLAYER_SIZE = 200;

function drawNameFields() {
    inputPlayer1 = createPlayerInput(STARTPOS_PLAYER1.x, STARTPOS_PLAYER1.y, COLOR_PLAYER1);
    inputPlayer2 = createPlayerInput(STARTPOS_PLAYER2.x, STARTPOS_PLAYER2.y, COLOR_PLAYER2);
}

function createPlayerInput(positionX, positionY, backgroundColor) {
    let inputPlayer = createInput();
    inputPlayer.size(PLAYER_SIZE);
    inputPlayer.position(positionX, positionY);
    inputPlayer.style('background-color', backgroundColor);
    return inputPlayer;
}

function nameFieldsEmpty() {
    return inputPlayer1.value() === "" || inputPlayer2.value() === "";
}