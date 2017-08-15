'use strict';

var people = [];

function Person(name, height, weight){
  this.name = name;
  this.height = height;
  this.weight = weight;

  this.eat = function(lbs){
    this.weight += lbs * .1;
  };
  this.exercise = function(aNumber){
    this.weight -= aNumber;
  };
  // this.eat();
  // this.exercise();
  people.push(this);
};

var me = new Person('Nicholas Hunt-Walker', 71, 185);
var mySon = new Person('Nathaniel Hunt-Walker', 22.44, 9.7);

var names = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(' ');

for (var i = 0; i < names.length; i++) {
  // people.push(new Person(names[i], Math.random() * (72-60) + 60), Math.random() * (200 - 100) + 100);
  // this does the same as below
  var person = new Person();
  person.name = names[i];
  person.height = Math.random() * (72 - 60) + 60;
  person.weight = Math.random() * (200 - 100) + 100;
  // people.push(person);
}

// var me = {
//   name: 'Nicholas Hunt-Walker',
//   height: 71,
//   weight: 185,
//   eat: function(lbs){
//     this.weight += lbs * .1;
//   },
//   exercise: function(aNumber){
//     this.weight -= aNumber;
//   }
// };
