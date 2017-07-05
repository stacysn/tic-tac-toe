// wait for the DOM to finish loading

console.log("Helloooooo");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  let gameArr = [];
  let turns = ['X','O','X','O','X','O','X','O','X']
  // let $rows = $('.row');

  for (let i = 0; i < turns.length; i++){
    // if ($('#one').on("click", function(){alert("hi!")})){
    //   console.log("testing");
    // }
    //
    //   else if (i % 2 === 0){
    //
    //   }
    if(i % 2 === 0){
      ($('.row').click(function(){ //trying to change that one box that is clicked;works only when specific id is called/clicked
        $(this).css('color', 'red');   //changing color of box/number once clicked
      }))
    }
 }



});

// document.getElementById("button").reset("Reset")


//*****************************psuedocode*******************************//
// for every turn (click) on box
// --> i = turns[i]
// ---> append to array of which box specifically
// -->(if a box is not taken/if not in the array, then proceed)
// --> if any of the possibilities of X or O wins, or even a cats game, then alert
// reset.






//***************Self Notes on ideas/past code ****************************//
// for (let i = 0; i < turns.length; i++){  //9 because of 9 boxes
//     if ($('.row').on("click", function()){
//       alert ("Hello There!");
//       alert(turns[i]);
//     };
// };

//for every turn (click) on box
//i = turns[i]
//append to array


// $('.row').on("click", function() {alert ("Hello There!")})
