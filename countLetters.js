const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const letters = {};
  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }
    if (!letters[letter]) {
      letters[letter] = 0;
    }

    letters[letter] += 1;

  } return letters;
};

const result = countLetters("Welcome to the Jungle");
console.log(result);
console.log(result.W);
assertEqual(result.W, 1);
assertEqual(result.o, 2);
//console.log(countLetters("Welcome to the Jungle"))
assertEqual(countLetters("Welcome to the Jungle").W, 1);
