

const middle = function (array) {
  let index = array.length; 
  let mid = index / 2 ;
  let result =[];
  if (index === 1 || index === 2 ) return result ;
  else if (index % 2 === 0) {
     // console.log(val);
      mid = Math.floor(mid);
      return array.slice(mid-1 , mid+1);
  }
       else {
        mid = Math.floor(mid);
        //console.log(array[mid]);
        console.log(result);
        return result.push(array[mid]);

       }

}

module.export= middle;