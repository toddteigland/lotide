const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = map;
/*
const results1 = map(words, word => word[0]);
console.log(results1);
*/



//Should fail as the results of the anonymous function being used as the 'callback' doesnt
//   match my 1234 array.

//assertArraysEqual(map(words,(value) => value[0]),[1,2,3,4])
