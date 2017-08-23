'use strict';

// get the list that will hold all the names
var list = document.getElementById('name-list');

// if I have something in localStorage with key of "names", do some stuff
if (localStorage.getItem('names')) {
  // take the value for "names" in localStorage and use JSON.parse to turn it into something else (like an array, or object, or whatever)
  var nameArray = JSON.parse(localStorage.getItem('names'));
  for (var i = 0; i < nameArray.length; i++) {
    var li = document.createElement('li');
    li.innerText = nameArray[i];
    list.appendChild(li);
  }
} else {
  // if there is nothing in localStorage with key of "names", do something else
  var nameArray = [];
}

var form = document.getElementById('the-form');
form.addEventListener('submit', addNameToList);

function addNameToList(event){
  event.preventDefault();
  var theInput = form.elements.aField.value;
  var li = document.createElement('li');
  li.innerText = theInput;
  list.appendChild(li);

  nameArray.push(theInput);
  localStorage.setItem('names', JSON.stringify(nameArray));
  form.reset();
}
