const assertEqual = require('../assertEqual')
const head = require('../head.js')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["seven"]),"seven");
assertEqual(head([]));