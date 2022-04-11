// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log("🔴🔴🔴 Assertion Failed");
//   } else {
//     console.log("🟩🟩🟩 Assertion Passed");
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

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // comparing length in the beginning
    return false;
  } for (let key in object1) {// comparing Array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])){
        return false;
      }
    } else if (object1[key] !== object2[key]){ // comparing key 
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// primitives as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false