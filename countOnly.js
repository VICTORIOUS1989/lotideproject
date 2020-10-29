
const countOnly = function (allItems, itemsToCount) {
  let object = {};
  for (let  itemToCount in itemsToCount) {
    let val = 0 ;
    if (itemsToCount[itemToCount] === true){
      for (const item of allItems ) {
      
      //  if (itemsToCount[itemToCount] === true) {
          if (itemToCount === item ){
            val ++;
            object [itemToCount] = val ;
            //console.log(object);
          }
          
       // }
      }
    }
  
  }
return object ;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));




