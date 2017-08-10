'use strict';

function evenOrOdd() {
  var num = prompt('Input a number');
  num = parseInt(num);
  console.log(num % 2 === 0);
}

function evenOrOddNum(num) {
  console.log(num % 2 === 0);
}

function fullName(firstName, lastName){
  console.log(firstName + ' ' + lastName);
}

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
  console.log('You will not see this message');
}

function returnStuff(){
  return ['thing', 'stuff'];
}

function inception(){
  function levelOne(){
    function levelTwo(){
      console.log('HOOOO MY GOOOOOD!!');
    }
    return 'foo';
  }
  return levelOne;
}

var num = 10;

function doAThing(){
  num = 20;
  return num * 50;
}
doAThing();

console.log(num);

var counter = 0;

function countUp(){
  var blerg = 'flerg';
  console.log(blerg);
  counter++;
  return blerg;
}
countUp();
console.log(blerg);

var bmi = function(height, weight){
  return height / weight;
};

(function(){
  console.log('flerg the blerg');
}());
