const array = [9,6,2];
const element = 12;

const checkFactors = ((arr,elem)=>{
   return arr.every((arrelem)=>elem%arrelem==0);
})

console.log(checkFactors([1,2,3,8],12));