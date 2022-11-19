const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } 
  else {
    console.log(`👎👎👎 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([2,3],[2,3])
assertArraysEqual([2,3],[2,7])

module.exports = assertArraysEqual;