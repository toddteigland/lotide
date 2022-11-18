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

//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

//console.log(takeUntil(data1,callbackFunc));



// <<<<<<  TESTING FUNCTIONS >>>>>>

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



assertArraysEqual(takeUntil(data1,callbackFunc),[1,2,5,7,2]);