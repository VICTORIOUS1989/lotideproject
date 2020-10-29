
const eqArrays = function (array1, array2)  {
  let bool;
  if (array1.length !== array2.length) return false;
  else {
    for (let i = 0 ; i < array1.length ; i++  ) {
      if (array1[i] !== array2[i]) {
        bool = false ;
        break;
      }
      else bool = true ;
      }
      
  } 
  return bool;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };


  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
