'use strict';

// var hotel1 = {
//   name: 'The CF Suites',
//   rooms: {
//     suites: 12,
//     cupboards: 22,
//     palaceRooms: 2
//   },
//   booked: {
//     suites: 0,
//     cupboards: 0,
//     palaceRooms: 0
//   },
//   roomTypes: ['suites', 'cupboards', 'palaceRooms'],
//   amenities: ['gym', 'office', 'pool', 'spa', 'parking', 'continental breakfast'],
//   checkAvailability: function(roomType){
//     return this.rooms[roomType] > this.booked[roomType];
//   },
//   bookRoom: function(roomType){
//     if (this.checkAvailability(roomType)) {
//       this.booked[roomType]++;
//       console.log('Thank you for booking one of our ' + roomType + ' with ' + this.name + ' hotel!');
//     } else {
//       console.log('No room for you!');
//     }
//   },
//   hasAmenity: function(amenity){
//     return this.amenities.includes(amenity.toLowerCase());
//   }
// };
//
// var hotel2 = {
//   name: 'The 201 Commons',
//   rooms: {
//     suites: 0,
//     cupboards: 220,
//     palaceRooms: 0
//   },
//   booked: {
//     suites: 0,
//     cupboards: 0,
//     palaceRooms: 0
//   },
//   roomTypes: ['suites', 'cupboards', 'palaceRooms'],
//   amenities: ['office', 'pool', 'spa', 'parking', 'continental breakfast', 'wifi'],
//   checkAvailability: function(roomType){
//     return this.rooms[roomType] > this.booked[roomType];
//   },
//   bookRoom: function(roomType){
//     if (this.checkAvailability(roomType)) {
//       this.booked[roomType]++;
//       console.log('Thank you for booking one of our ' + roomType + ' with ' + this.name + ' hotel!');
//     } else {
//       console.log('No room for you!');
//     }
//   },
//   hasAmenity: function(amenity){
//     return this.amenities.includes(amenity.toLowerCase());
//   }
// };
//
// // var allHotels = [];
// // allHotels.push(hotel1);
// // allHotels.push(hotel2);
//
// var allHotels = [hotel1, hotel2]; // the same as above commented lines
//
// for (var i = 0; i < allHotels.length; i++){
//   if (allHotels[i].name === 'The CF Suites') {
//     console.log('It\'s there!');
//     break;
//   }
// }

// ======= AND NOW ABOUT THE DOM ========

var body = document.getElementsByTagName('body')[0];
var pTag = document.createElement('p');
pTag.id = 'nada';
pTag.className = 'zilch';
pTag.innerHTML = '<img src="http://placehold.it/200/200" />';
body.appendChild(pTag);

var ul = document.createElement('ul');
ul.id = 'list';
body.appendChild(ul);

//
// var p1 = document.getElementById('nada');
// var p2 = document.getElementsByClassName('zilch')[0];
// var p3 = document.getElementsByTagName('p')[0];
//
// var list = document.getElementById('list');
//
for (var i = 0; i < 100; i++) {
  var newLi = document.createElement('li');
  var img = document.createElement('img');
  img.setAttribute('src', 'http://placehold.it/50/50');
  newLi.innerText = i; // <--- if you want to change the inner text
  newLi.appendChild(img);
  list.appendChild(newLi);
}
