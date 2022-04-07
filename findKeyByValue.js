const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

// create a function
// 2nd argument = value of the object
// output will be the key

const findKeyByValue = function (words, title) {
  let output = undefined;

  for (let a in words) { // iterate through the value
    // console.log(a);
    if (words[a] === title) {
      output = a;
    }
  }
  return output;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);