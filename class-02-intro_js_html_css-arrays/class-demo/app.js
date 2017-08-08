'use strict';

var food = 'pho';
var sun = 'bright'; // if you're blue and you don't know where to go to...etc...;

/* var one = 1;
var two = 2;
var three = 3; */
// var ageCheck = confirm('Are you over 18?');
// if (!ageCheck) {
//   alert('Well then you kinda suck, don\'t you?');
// } else {
//   // happens if my condition is false
// }

var number = prompt('Pick a number between 0 and 100');
if (parseInt(number) < 20 && parseInt(number) > 0) {
  alert('That\'s a little small, eh?');
} else if (parseInt(number) >= 20 && parseInt(number) < 80) {
  alert('This is about mid-range I guess');
} else if (parseInt(number) >= 80 && parseInt(number) < 100 ) {
  alert('I guess this is a large number');
} else {
  alert('You didn\'t follow the damn rules!');
}
