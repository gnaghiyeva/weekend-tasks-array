var arr = [32,25,85,89,45,76,7,41,2,12];

// // add element 
// function addElement(elem){
//     var newArray = arr.push(elem);
//     return newArray
// }
// let newArray = arr;
// let number = prompt("daxil edilecek eded:", "0");
// let elem = parseInt(number);
// addElement(elem);

// console.log(arr);
// console.log(newArray);


// add element 
console.log(arr);
function addElement(elem){
    var newArray = arr.push(elem);
    return newArray
}
let newArray = arr;
addElement(15);
console.log(newArray);