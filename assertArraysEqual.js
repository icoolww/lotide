// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("🟩🟩🟩 Assertion Passed");
  } else {
    console.log("🔴🔴🔴 Assertion Failed");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3])

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false