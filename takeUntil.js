// const eqArrays = function(actual, expected){
//   if (actual.length !== expected.length) {
//     return false;
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i] ) {
//       return false;
//     } 
//   }
//   return true;
// }

// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log("🟩🟩🟩 Assertion Passed");
//   } else {
//     console.log("🔴🔴🔴 Assertion Failed");
//   }
// };

//output in array
//loop inside the array
//stop the loop when the condition is true (truthy value)
//if return false, stop the loop
//push the result to output in array

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEquals');

const takeUntil = function(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++){ //loop the array
    // console.log(arr);
    if (callback(array[i])){ // truthy condition
      return output;
    }
    output.push(array[i]); // push to array once the condition is met
  }
  return output; 
};

module.exports = takeUntil;


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]