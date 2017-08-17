'use strict';

var output = document.getElementById('output');
var calculation = '';
var result = 0;

var clickables = document.getElementsByClassName('clickable');
function handleClick(event){
  // do something
  var item = event.target;
  var value = item.innerText;
  if (item.className.includes('operators')) {
    if (item.innerText === '+') {
      result += parseFloat(calculation);
      calculation = '';
      output.innerText = result;
    } else if (item.innerText === '-') {
      result -= parseFloat(calculation);
      calculation = '';
      output.innerText = result;
    } else if (item.innerText === '×') {
      if (result === 0) {
        result = 1;
      }
      result *= parseFloat(calculation);
      calculation = '';
      output.innerText = result;
    } else if (item.innerText === '÷') {
      // this is broken. come back later
      if (result === 0) {
        result = 1;
      }
      result *= 1 / parseFloat(calculation);
      calculation = '';
      output.innerText = result;
    } else {
      calculation = '';
      result = 0;
      output.innerText = '';
    }
  } else {
    calculation += value;
    output.innerText = calculation;
  }
};

for (var i = 0; i < clickables.length; i++){
  clickables[i].addEventListener('click', handleClick);
}
