const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for(var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } 
  else {
    console.log(`👎👎👎 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Looping through a sentence parameter
// Checking each character for a space, if there is one, then leaving it out (continue)
// if the letter in the sentence does NOT exist in results then give it an empty array
// if it does exist then push the index of where it's found into it's array
// return the object of letters and arrays of indexes


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }

    results[sentence[i]].push(i);
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);