function deepCopy (obj) {
  if(!obj || typeof obj !== 'object') return obj;
  
  let newObj = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
     if(obj.hasOwnProperty(key)) 
         newObj[key] = deepCopy(obj[key]);
         
  return newObj;
 }
}
 
 const obj1 = {
     a: 1,
     b: {
         b1: 2,
         b2: 3,
     },
     c: [1, 2, 3]
 };
 
 const obj2 = deepCopy(obj1);
 
 console.log(obj2);