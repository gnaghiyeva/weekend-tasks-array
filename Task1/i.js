var arr = [32,25,85,89,45,76,7,41,2,12];

// function bigNumbers(){
    
// let newArray=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>40){
//           newArray.push(arr[i]);
//         }
//     }
//     return newArray
// }
// console.log(bigNumbers());


//---------------------------------------------------------------------------------------------

let filteredArray = arr.filter((number)=>{
    if(number>40){
        return arr
    }
})

console.log(filteredArray)