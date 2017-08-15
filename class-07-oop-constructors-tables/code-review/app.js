'use strict';

var pike = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.eachHourSales(); // generates the sales we need
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    // conceptually...
    // trying to go through the DOM manipulation process
    // creating a new element and using javascript to fill information in the HTML where we've pointed to
    // we want...
    // -> h2 tag with the store name
    // -> ul tag after that

    // Abdul:
    // create the ul tag
    // append the ul to the section
    // THEN append the list items to the ul

    for (var i = 0; i < this.storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var seatac = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.eachHourSales(); // generates the sales we need
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    // conceptually...
    // trying to go through the DOM manipulation process
    // creating a new element and using javascript to fill information in the HTML where we've pointed to
    // we want...
    // -> h2 tag with the store name
    // -> ul tag after that

    // Abdul:
    // create the ul tag
    // append the ul to the section
    // THEN append the list items to the ul

    for (var i = 0; i < this.storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var seattleCenter = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.eachHourSales(); // generates the sales we need
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    // conceptually...
    // trying to go through the DOM manipulation process
    // creating a new element and using javascript to fill information in the HTML where we've pointed to
    // we want...
    // -> h2 tag with the store name
    // -> ul tag after that

    // Abdul:
    // create the ul tag
    // append the ul to the section
    // THEN append the list items to the ul

    for (var i = 0; i < this.storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var capitol = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.eachHourSales(); // generates the sales we need
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    // conceptually...
    // trying to go through the DOM manipulation process
    // creating a new element and using javascript to fill information in the HTML where we've pointed to
    // we want...
    // -> h2 tag with the store name
    // -> ul tag after that

    // Abdul:
    // create the ul tag
    // append the ul to the section
    // THEN append the list items to the ul

    for (var i = 0; i < this.storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};
var alki = {
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  simCookies: [],
  totalCookieSales: 0,
  randomCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  eachHourSales: function(){
    this.simCookies = [];
    this.totalCookieSales = 0;
    for (var i = 0; i < this.storeHours.length; i++) {
      var hourlyCookieSales = Math.ceil(this.avgCookies * this.randomCustomersPerHour());
      this.simCookies.push(hourlyCookieSales);
      this.totalCookieSales += hourlyCookieSales;
    }
  },
  dailySalesReport: function(){
    this.eachHourSales(); // generates the sales we need
    var location = document.getElementById('sales-section');
    var locationName = document.createElement('h2');
    locationName.innerText = this.name;
    location.appendChild(locationName);

    var list = document.createElement('ul');
    location.appendChild(list);

    // conceptually...
    // trying to go through the DOM manipulation process
    // creating a new element and using javascript to fill information in the HTML where we've pointed to
    // we want...
    // -> h2 tag with the store name
    // -> ul tag after that

    // Abdul:
    // create the ul tag
    // append the ul to the section
    // THEN append the list items to the ul

    for (var i = 0; i < this.storeHours.length; i++) { // for each hour do some stuff
      // this block of code creates a child element for "list"
      var listItems = document.createElement('li');
      listItems.innerText = this.storeHours[i] + ': ' + this.simCookies[i] + ' cookies';
      list.appendChild(listItems); // adds the new list item to the unordered list
    }
    var listItems = document.createElement('li');
    listItems.innerText = 'Total: ' + this.totalCookieSales + ' cookies';
    list.appendChild(listItems);
  }
};

var stores = [pike, seatac, seattleCenter, capitol, alki];

for (var i = 0; i < stores.length; i++) {
  stores[i].dailySalesReport();
}

// --- This does the same thing as above ---
// pike.dailySalesReport();
// seatac.dailySalesReport();
// seattleCenter.dailySalesReport();
// capitol.dailySalesReport();
// alki.dailySalesReport();

// generate some sales
// declare a variable named "list" that selects a <ul> to fill with data
// create a for loop
// set starting and stopping point in iteration
// create a new variable for new list items
// change the inner text of new list item to be values of the storeHours array
// append the new list item to our selected list
