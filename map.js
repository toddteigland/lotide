//Take in two arguments
//1. Array to map  &  2. A callback function
//Return new array based on results of the callback

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/*
const results1 = map(words, word => word[0]);
console.log(results1);
*/


// <<<< TESTING FUNCTIONS >>>>

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


//Should fail as the results of the anonymous function being used as the 'callback' doesnt
//   match my 1234 array.

assertArraysEqual(map(words,(value) => value[0]),[1,2,3,4])
