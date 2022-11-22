const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = (array, callback) => {
  const data2 = [];
  for (const element of array) {
    //Checking for falsy result from callbackfunc
    if (!callback(element)) {
      //if falsy (positive number or undefined) push to data2
      data2.push(element);
    }else {
      //This stops the loop if number is neg (not falsy)
      return data2;
    }
    //stopping loop in case there aren't any negative (not falsy) numbers
  }return data2;
}



const callbackFunc = (element) => {
  if (element < 0) {  
  return element;
  }
}

module.exports = takeUntil;
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

//console.log(takeUntil(data1,callbackFunc));


//assertArraysEqual(takeUntil(data1,callbackFunc),[1,2,5,7,2]);