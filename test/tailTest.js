const assertEqual = require('../assertEqual')
const tail = require('../tail.js')

const words = ["Yo Yo", "Lighthouse", "Labs"];

//tail(words);  
//assertEqual(tail(words).length,3);

const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for the length of the array which is 2", () => {
    assert.strictEqual(tail(words).length, 2);
  });
});