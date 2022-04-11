// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

module.exports = assertEqual;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);