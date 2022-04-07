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





const letterPositions = function(sentence) {
  const results = {}; // output in an empty objects
  // logic to update results here
  
  for (let position in sentence) {
    // console.log(letter);
    const letter = sentence[position];
    if (letter === " ") {
      continue; // if there is space, continue the loop, but not printing empty space
    } if (results[letter]) {
      results[letter].push(position); // start the process
    } else {
      results[letter] = [position];
    }
  }
  console.log(results);
  return results;
};

// for (let i = 0; i < sentence.length; i++){
//   if (sentence[i] === " ") {
//     continue;
//   } else if (results[sentence[i]]) {
//     results[sentence[i]].push(i);
//   } else {
//     results[sentence[i]] = [i];
//   }
// }
// console.log (results);
// return results;
// };



letterPositions("hello")

// assertArraysEqual(letterPositions("hello").e, [1]);

// expected output
// letterPositions("lighthouse in the house");
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }