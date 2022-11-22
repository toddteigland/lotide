const assertEqual = require('./assertEqual')

const findKey = (object, callback) => {

// This searches through the object using "IN", returns Blue HIll, akaleri, etc
  for (const element in object) {
      //This calls the callback function on each objects element (stars:1 etc) to check if condition is being
      //met thus making it TRUE. If it is, then return the instance where it is
      if (callback(object[element])) {
        return element; 
      }
  }
}
// This is the callback function which x is the parameter and returns TRUE if number of stars is 2
const customFunction = function(x) {
  return x.stars === 2;
}


//This is the object,callback.  Custom function could also be writting as an anonymous function which would 
//make the custom function above obsolete
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, customFunction)
// console.log(result);


// assertEqual(result,"noma")

module.exports = findKey;
