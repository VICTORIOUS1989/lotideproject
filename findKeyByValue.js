
 

    const findKeyByValue = function(object, value) {
      for (let key in object){
       // console.log(object[key]);
        if (object[key] === value) return key;
      }
      };

      
      const bestTVShowsByGenre = { 
        scifi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      
      console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
      console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));