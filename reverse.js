const inputs = process.argv;

let reverseIt = function(inputs) {
  let newArr = [];
  newArr = inputs.slice(2);
  for (let j = 0; j < newArr.length; j++) {
    let letters = "";
    for (let i = newArr[j].length - 1; i >= 0; i--) {
      letters += newArr[j][i];
    } console.log(letters);
  }
};


reverseIt(inputs);