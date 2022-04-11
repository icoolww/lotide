// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log("🔴🔴🔴 Assertion Failed");
//   } else {
//     console.log("🟩🟩🟩 Assertion Passed");
//   }
// };

// output should be in objects, {}
// create a loop to iterate each letter, for loops
// count the letters, if statement

const assertEqual = require('./assertEqual');

const countLetters = function (string) {
  let output = {}; // output in an empty objects
  
  for (let letter of string) {
    // console.log(letter);
    if (letter === " ") {
      continue; // if there is space, continue the loop, but not printing empty space
    } if (output[letter]) {
      output[letter] += 1; // start the counting process
    } else {
      output[letter] = 1;
    }
  }
  console.log(output);
  return output;
};

module.exports = countLetters;

countLetters("lighthouse in the house") 

// expected output
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }