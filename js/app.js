$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  let $boxes = $('.box');
  let turn = "X"; //first move is X
  // let $rows = $('.row');
  //first turn is X, then switch to O
  function whoGoes(){
    if (turn === "X"){
      turn = "O";
    } else if (turn === "O"){
        turn = "X"
      };
  };

  function spotTaken(){
    // if ($('.box').text("X"{
    //   console.log(("WHAT"));
    //   // ($('.box').text(turn));
    // } else {
    //   console.log("you can't move here!")
    // }
  }



  $('.box').click(function(){
    $(this).text(turn);
    whoGoes();
    spotTaken();
    // console.log($(this));
  })


  //reset Game
  function resetGame(){
    turn = "X";
    if ($('.box').text("X") || $(box).text("O") || $(box).text("")){
      $('.box').text(" ");
    }
  }


  $('#reset').click(function(){
    resetGame();
  });
});
