
function without (array , values) {
  let tableau = [];
  for (let j = 0 ; j < array.length ; j++) {
    for (let i = 0 ; i < array.length ; i++) {
    if ((array[i] === values[j]) === true ) array.splice(i , 1);

    }
  }
return array ;
}


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



function assertArraysEqual(array1 , array2) {
  if (eqArrays(array1 , array2) === true ) return "✅✅✅ Assertion Passed: array1 === array2";
  else  return "🛑🛑🛑 Assertion failed: array1 !== array2";
}


//console.log(without(["hello", "world", "lighthouse" , 1 , 2], ["lighthouse" , 2 , "1" ]));