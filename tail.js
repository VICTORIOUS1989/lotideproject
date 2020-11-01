
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


module.export= tail;
