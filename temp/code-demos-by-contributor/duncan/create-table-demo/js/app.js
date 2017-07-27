console.log('does this workz?');


// create an element
// set its attributes
// set its content
// add it to the dom

// create a table
// create a row add it to the table
// create th add them to the row

function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function genorateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

var peopleTable = document.createElement('table');

var firstRow = genorateHeadingRow(['name', 'age', 'language']);
var secondRow = genorateDataRow(['dunc', '', 'javascript']);

peopleTable.appendChild(firstRow);
peopleTable.appendChild(secondRow);

document.getElementById('table-demo').appendChild(peopleTable);





// var rowOne = document.createElement('tr');
// peopleTable.appendChild(rowOne);
// var rowOneColOne = document.createElement('th');
// rowOneColOne.textContent = "Name";
