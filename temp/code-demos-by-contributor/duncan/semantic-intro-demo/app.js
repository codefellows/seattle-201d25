// prompt the user for input and store their results in fluffyBunnyCount
// prompt will allways return a string
var fluffyBunnyCount = prompt('how many marshmellows can you eat and say fluffy bunny?');

// pass the string in fluffyBunnyCount into parseInt to turn it in to a number
// store the number returned from parseInt back into the fluffyBunnyCount variable
fluffyBunnyCount = parseInt(fluffyBunnyCount);
if (fluffyBunnyCount < 15){
  console.log('hurray!');
} else {
  console.log('booo');
}

// prompt the user for input and store their results in agreeWithConditions
var agreeWithConditions = prompt('do you agree with me? yes or n');

// check if the user input.toUpperCase == 'YES'
if(agreeWithConditions.toUpperCase() === 'YES'){
  console.log('hurray again!');
} else {
  console.log('boo again!');
}

// what will typeof(thing) return when you pass it different values 
console.log('typeof(boolean): ', typeof(true));
console.log('typeof(num)    : ', typeof(1));
console.log('typeof(string) : ', typeof('wat'));
console.log('typeof(array) : ', typeof([]));
console.log('typeof(object) : ', typeof({}));
console.log('null: ', typeof(null));
