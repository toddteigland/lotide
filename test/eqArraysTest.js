const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([3, 2, 1], [3, 2, 1]), true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)


const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for ([3, 2, 1], [3, 2, 1])", () => {
    assert.deepEqual(eqArrays([3, 2, 1], [3, 2, 1]), true);
  });
  it('returns false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});