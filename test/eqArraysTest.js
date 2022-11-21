const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([3, 2, 1], [3, 2, 1]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false)
