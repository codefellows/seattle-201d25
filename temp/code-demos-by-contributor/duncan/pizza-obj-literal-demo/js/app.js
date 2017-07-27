function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addHourlySalesDataToLocation(storeLocation, time, pizzasSold, deliveriesMade){
  storeLocation.hourlyData.push({
    time: time,
    pizzasSold: pizzasSold,
    deliveriesMade: deliveriesMade,
    driversNeeded: Math.ceil(deliveriesMade / 3)
  });
}

var ballard = {
  name: 'ballard',
  hourlyData: []
};

addHourlySalesDataToLocation(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));

addHourlySalesDataToLocation(ballard, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));

addHourlySalesDataToLocation(ballard, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));

addHourlySalesDataToLocation(ballard, '11:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));

function getPizzasSold(storeLocation){
  var totalPizzasSold = 0 ;
  console.log('enter function getPizzasSold');
  for (var i = 0; i < storeLocation.hourlyData.length; i++){
    totalPizzasSold += storeLocation.hourlyData[i].pizzasSold;
  }
  var storeTotalHeading = document.getElementById(storeLocation.name + '-total');
  if (storeTotalHeading){
    storeTotalHeading.textContent = 'storeLocation total pizzas sold ' + totalPizzasSold;
  }
}

var ballardUL = document.getElementById(ballard.name);
if (ballardUL){
  var eightOclockLi;
  for (var i = 0; i < ballard.hourlyData.length; i++ ){
    eightOclockLi = document.createElement('li');
    eightOclockLi.textContent = ballard.hourlyData[i].time + ' pizzas sold: ' + ballard.hourlyData[i].pizzasSold;
    ballardUL.appendChild(eightOclockLi);
  }
}

getPizzasSold(ballard);
