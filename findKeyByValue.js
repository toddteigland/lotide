const assertEqual = require('./assertEqual')


//Take in an object and a value
//Scan the object, and return the first Key which contains that value
//If no key with that value return undefined

const findKeyByValue = function (obj, tvShow) {
  for (const shows in obj) {
    return Object.keys(obj).find(key => obj[key] === tvShow);
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


module.exports = findKeyByValue;
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);