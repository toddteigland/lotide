const assertEqual = require('./assertEqual');

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


assertEqual(eqArrays([3, 2, 1], [3, 2, 1]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)

module.exports = eqArrays;
