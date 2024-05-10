let inputPlayer1, inputPlayer2, playButton;

function player(){
    // Jucătorul 1
  inputPlayer1 = createInput();
  inputPlayer1.position(800, 100);
  inputPlayer1.size(200);
  inputPlayer1.style('background-color', '#82A8C7');

    // Jucătorul 2
  inputPlayer2 = createInput();
  inputPlayer2.position(800, 200);
  inputPlayer2.size(200);
  inputPlayer2.style('background-color', '#B67C90'); 

}

function startGame() {
  let name1 = inputPlayer1.value();
  let name2 = inputPlayer2.value();
  console.log('Jucător 1: ' + name1 + ', Jucător 2: ' + name2);
}

