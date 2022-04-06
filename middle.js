

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("🟩🟩🟩 Assertion Passed");
  } else {
    console.log("🔴🔴🔴 Assertion Failed");
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
};

// if input array less than 2, output = empty array
// if odd, output = middle, divided by 2, math.floor
// if even, output = middle of 2, - 1

const middle = function (array) {
  let output = [];
  const middleIndex = Math.floor(array.length / 2); 
  
  // less than 2, return empty array
  if (array.length <= 2) {
    return output;
    console.log(output);
  }
  // even array
  if (array.length % 2 === 0){  
    output = output.concat([array[middleIndex - 1], array[middleIndex]]);  
  } 
  // odd array
  else {  
  output.push(array[middleIndex]);
  }
  // console.log(output);
  return output;
  };


//  // Test Code
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]