const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🔴🔴🔴 Assertion Failed");
  } else {
    console.log("🟩🟩🟩 Assertion Passed");
  }
};

const findKey = function (object, callback) {
  let output = "";

  for (let a of Object.keys(object)) { // iterate through the value

    //  console.log(callback(object[a]));
    if (callback(object[a])) { // check the condition, truthy
      output += a;
      break; // stop the loop if the condition is true
    }
  }
  console.log(output);
  return output;
};



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"




// const findKeyByValue = function (words, title) {
//   let output = undefined;

//   for (let a in words) { // iterate through the value
//     // console.log(a);
//     if (words[a] === title) {
//       output = a;
//     }
//   }
//   return output;
// };