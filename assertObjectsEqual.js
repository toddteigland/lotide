//Function to compare objects
const eqObjects = function (obj1, obj2) {
  //Saving the keys of each object as variables
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  //Checking to see if both have the same length
  if (keys1.length !== keys2.length) {
    return false;
  }
  //Iterate through the keys of the first object
  for (let key of keys1) {
    //If any of the keys of obj1 && obj2 then use the eqArray function to do the comparison
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      
      return eqArrays(obj1[key],obj2[key]);
      //The eqarrays function compares them, if they're identical it returns true, if not then false

    } else if (obj1[key] !== obj2[key]) {
      //However, if they're not both arrays, then jsut a regular comparison to see if theyre false, if not returns true below
        return false;
    }
  }
  return true;
}



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual,expected)) {
    console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1},{b:2});