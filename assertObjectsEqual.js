// const eqObjects = function(object1, object2) {
//   if (object1 === object2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const eqArrays = function(actual, expected){
//   if (actual.length !== expected.length) {
//     return false;
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i] ) {
//       return false;
//     } 
//   }
//   return true;
// };

const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])){
        return false;
      }
    } else if (object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`🟩🟩🟩 Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.assertObjectsEqual = assertObjectsEqual;

assertObjectsEqual({ a: '1' }, {a: '1' });