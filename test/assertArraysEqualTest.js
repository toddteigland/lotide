const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays');

// assertArraysEqual([2,3],[2,3])
// assertArraysEqual([2,3],[2,7])


const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for ([2,3],[2,3])", () => {
    assert.deepEqual(assertArraysEqual([2,3],[2,3]), true);
  });
  it('returns [2,3] for [2,7]', () => {
    assert.deepEqual(assertArraysEqual([2,3],[2,7]), false );
  });
});