// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log("🔴🔴🔴 Assertion Failed");
//   } else {
//     console.log("🟩🟩🟩 Assertion Passed");
//   }
// };

const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected){
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] ) {
      return false;
    } 
  }
  return true;
}

module.exports = eqArrays;

// // TEST CODE
// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual(1, 1);


// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false




