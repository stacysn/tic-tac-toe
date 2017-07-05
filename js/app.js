// wait for the DOM to finish loading

console.log("Helloooooo");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var $rows = $('.row');
  $('.row').on("click", function() {alert ("Hello There!");
  });

})
