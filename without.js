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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("🟩🟩🟩 Assertion Passed");
  } else {
    console.log("🔴🔴🔴 Assertion Failed");
  }
};


const without = function (actual, expected) {
  const result = [];
  
  for (let i = 0; i < actual.length; i++) {
    let sameNumber = false;

    for (let j = 0; j < expected.length; j++) {
      if (expected[j] === actual[i]) {
        sameNumber = true;
      }
    }
    
    if (!sameNumber) {
       result.push(actual[i]);
    }
  }
  console.log(result);
  return result;
}



// [1,2,3].includes(1)
// true
// ["1",2,3].includes(1)
// false

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["hello", "world", "lighthouse"], ["lighthouse"]); // ["hello", "world"]
without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]); // ["hello"]


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);