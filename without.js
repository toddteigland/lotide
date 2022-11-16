const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for(let i = 0; i < arr1.length; i++) {
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


const without = function (source, itemsToRemove) {
  leftoverArr = [];
  leftoverArr = source.filter(j => !itemsToRemove.includes(j));
  return leftoverArr;
  console.log(leftoverArr);
};
  
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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);