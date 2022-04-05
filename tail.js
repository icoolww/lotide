// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected){
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

const tail = function(arr){
  arr.shift();
  return arr;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

[1, 2, 3] === [1, 2, 3] // => false
[1, 2, 3] == [1, 2, 3] // => false