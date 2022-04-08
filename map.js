// const words = ["ground", "control", "to", "major", "tom"];

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

// const map = function(array, callback) {
//   // temporary code:
//   console.log('array: ', array);
//   console.log('callback: ', callback);

//   const results = [];
//   return results;
// }

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}


// const results1 = map(words, word => word[0]);
// console.log(results1);



const testArray1 = ['bacon', 'gravy', 'soda'];
const testArray2 = [1, 2, 3]
const testArray3 = [3, 2, 1]


assertArraysEqual(map(testArray1, word => word[0]), ['b', 'g', 's']);
assertArraysEqual(map(testArray2, num => num * 2), [2, 4, 6]);
assertArraysEqual(map(testArray3, num => num > 2), [true, false, false]); 