// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected){
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

const head = function(arr){
  return arr[0];
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
