var someCondition = false;
if (someCondition) {
  // perform some code
} else {
  // in case someCondition is False
}

var counter = 0;
for (var i = 0; i < 5; i++) {
  counter++;
}
// var i = 0;
// counter++ // counter === 1
// i++ // i === 1
// counter++ // counter === 2
// i++ // i === 2
// counter++ // counter === 3
// i++ // i === 3
// counter++ // counter === 4
// i++ // i === 4
// counter++ // counter === 5
// i++ // i === 5

// var answer = prompt('Do you even lift, brah?');
// while (true) {
//   for (var i = 0; i < 10; i++) {
//     if (true) {
//       break;
//     }
//   }
//   // some other code
// }

var nums = [1, 2, 3, 4, 5, 6, 7];
for (var idx = 0; idx < nums.length; idx += 1) {
  if (!(nums[idx] % 2)) {
    console.log(nums[idx]); // prints only even numbers
  }
}
