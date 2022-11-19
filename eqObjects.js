const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

//More Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

module.exports = eqObjects;