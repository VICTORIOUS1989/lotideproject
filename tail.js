
const tail= function (array) {
  let tail=[];
  if (array.length === 0 || array.length === 1 ) return [];
  else 
  { 
    for (i = 0;i < array.length-1;i++){
      tail[i]=array[i+1];
    }
  }
return tail;
} 


const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(words); 