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


const middle = function (arr) {
  let newArr = [];
   if (arr.length <= 2) {
    return newArr;
   }
   else if (arr.length % 2 !== 0 && arr.length >= 3) {
    newArr = arr.slice(arr.length / 2, ((arr.length / 2) + 1) )
   }
   else if (arr.length % 2 === 0 && arr.length > 2) {
    newArr = arr.slice((arr.length / 2) - 1, ((arr.length /2) + 1))
   }
   return newArr;
}



assertArraysEqual(middle([1,2,3,4]), [2,3]);



//take in an array
//splice and pop first and last elements
//if .length is odd only single element should remove
// if .length is even two should be left
// use assertarraysequal to test, which uses eqarrays to see if my result in the test on 
//     line 40 match my expected also on line 40. if it does, it passes a positive back
//     to assertarraysequal which prints out that nice message to the console
