// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log("🔴🔴🔴 Assertion Failed");
//   } else {
//     console.log("🟩🟩🟩 Assertion Passed");
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr[0];
};

module.exports = head;

// // // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
