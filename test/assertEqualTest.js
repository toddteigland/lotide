const assertEqual = require('../assertEqual')
// Test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Work from Home", 4);
// assertEqual("4",4); 

const assert = require('chai').assert;

describe("#assertEqual", () => {
  it('returns true for ("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns true for (1,1)", () => {
    assert.strictEqual(assertEqual(1,1), true); 
  });
  it('returns false for ("Work from Home", 4)', () => {
    assert.strictEqual(assertEqual("Work from Home", 4), false); 
  });
});