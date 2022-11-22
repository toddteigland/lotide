const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const without = function (source, itemsToRemove) {
  leftoverArr = [];
  leftoverArr = source.filter(j => !itemsToRemove.includes(j));
  return leftoverArr;
  console.log(leftoverArr);
};
  
module.exports = without;
/* Test Case
let actual = without([1, 2, 3], [1])
let expected = [2,3]
assertArraysEqual(actual,expected);
*/

/* Test Case
let actual = (without(["1", "2", "3"], [1, 2, "3"]))
let expectd = ["1","2"];
assertArraysEqual(actual,expectd);
*/

// Test Case
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);