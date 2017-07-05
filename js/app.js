// wait for the DOM to finish loading

console.log("Helloooooo");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  let gameArr = [];
  let turns = ['X', 'O', 'X','O', 'X', 'O', 'X', 'O', 'X']
  let $rows = $('.row');

  for (let i = 0; i < turns.length; i++){  //9 because of 9 boxes
    if ($('.row').on("click", function(){
      if (i % 2 === 0){
        alert ("Player 2's turn")
      }
      else {
        alert ("Player 1's turn")
      }
      console.log("testing");
    })
  })
});


//psuedocode
// for every turn (click) on box
// --> i = turns[i]
// ---> append to array of which box specifically
// -->(if a box is not taken/if not in the array, then proceed)
// --> if any of the possibilities of X or O wins, or even a cats game, then alert
// reset.
//









// for (let i = 0; i < turns.length; i++){  //9 because of 9 boxes
//     if ($('.row').on("click", function()){
//       alert ("Hello There!");
//       alert(turns[i]);
//     };
// };

//for every turn (click) on box
//i = turns[i]
//append to array

// $('.row').on("click", function() {alert ("Hello There!")}
