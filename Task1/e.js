var arr = [32,25,85,89,45,76,7,41,2,12];


let newArray = arr.sort(function(a,b){
    return a-b;
});
console.log(newArray)
console.log(arr[arr.length-1])