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
   return (newArr);
};

module.exports = middle;

//take in an array
//splice and pop first and last elements
//if .length is odd only single element should remove
// if .length is even two should be left
// use assertarraysequal to test, which uses eqarrays to see if my result in the test on 
//     line 40 match my expected also on line 40. if it does, it passes a positive back
//     to assertarraysequal which prints out that nice message to the console
