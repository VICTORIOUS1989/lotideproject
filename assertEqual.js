
const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };
  


module.exports= assertEqual;