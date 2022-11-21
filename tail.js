const assertEqual = require('./assertEqual')

const tail = function(words) {

  return words.slice(1);
};

module.exports = tail;