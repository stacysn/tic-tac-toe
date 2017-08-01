$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  let $boxes = $('.box');
  let turn = "X"; //first move is X

  //reset Game
  function resetGame() {
    // reset the board itself
    $boxes.text("");
    $boxes.removeClass("X");
    $boxes.removeClass("O");
    $('h1').html("Classic Tic Tac Toe");

    // reset the variables that track game progress
    turn = "X";
  };

  // let $rows = $('.row');
  //first turn is X, then switch to O
  function whoGoes(){
    if (turn === "X"){
      turn = "O";
    }
    else if (turn === "O"){
        turn = "X"
    };
  };

  function spotsTaken($firstSpot, $secondSpot, $thirdSpot){
    var firstSpot = $firstSpot.text(),
        secondSpot = $secondSpot.text(),
        thirdSpot = $thirdSpot.text();

    if ((firstSpot === "X") && (secondSpot === "X") && (thirdSpot === "X")){
        return "X";
      }
      else if ((firstSpot === "O") && (secondSpot === "O") && (thirdSpot === "O")){
        return "O";
      }

    return null;
  };

  function diagonalWinner() {
    var leftDownDiag = spotsTaken($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
    var rightUpDiag = spotsTaken($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));
    return leftDownDiag || rightUpDiag;
  };

  function columnWinner() {
    var leftCol = spotsTaken($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
    var middleCol = spotsTaken($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
    var rightCol = spotsTaken($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

  // using the || trick again
    return leftCol || (middleCol || rightCol);
  };

  function rowWinner() {
    var topRow = spotsTaken($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
    var middleRow = spotsTaken($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
    var bottomRow = spotsTaken($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

    return topRow || (middleRow || bottomRow);
  };

  function getWinner() {
    return diagonalWinner() || (rowWinner() || columnWinner());
  };

  function boardHasEmptyBoxes() {
    // start by assuming no empty boxes
    var hasEmptyBoxes = false;
    // check if every box is empty
    for (var i=0; i<$boxes.length; i++){
      // as soon as an empty box is found, update hasEmptyBoxes
      if ($boxes.eq(i).text() === ''){
        hasEmptyBoxes = true;
      }
    }
    return hasEmptyBoxes;
  }

  $('.box').click(function(){
    if ($(this).text() === ''){
      $(this).text(turn);
      $(this).addClass(turn);

      var winner = getWinner();
      if (winner){
        $('h1').html("Player " + winner + " won!!!");
        // resetGame();
      }
      else if (boardHasEmptyBoxes()){
        whoGoes();
      }
      else {
        $('h1').html("CAT'S GAME!");
        // resetGame();
      }
    }
  });


  $('#reset').on('click', function(){
    resetGame();
  });

});
