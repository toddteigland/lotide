# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @toddteigland/lotide`

**Require it:**

`const _ = require('@toddteigland/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`countLetters`: Counts the number of letters in a given sentence
*`countOnly`: Counts all instances of an input in a given array
*`findKey`: Searches an object and using a callback function finds the key of the element
*`findKeyByValue`: Searches an object and returns the first key that contains the input value
*`head`: Returns the first element of an array
*`letterPositions`: Takes in a string and returns each letter and all the indexes they appear at
*`map`: Populates a new array with the elements of a given array
*`middle`: Takes in an array and returns it without the start or end
*`tail`: Takes in an array and returns the last element
*`takeUntil`: Takes in an array and returns all elements until condition from callback function is met
*`without`: Takes in array and returns a new array minus the parameter element