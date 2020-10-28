let head = function (array) {
  if ( array.length > 0 ) return array[0];
  else return undefined ;
}



const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };


console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));