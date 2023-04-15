const start = 1;
const end = 5;

const getSequence=((start,end)=>{
    const IntervalNumbers=[];
    for(let i=start; i<=end;i++){
       IntervalNumbers.push(i);
    }

    return IntervalNumbers;
})

console.log(getSequence(2,5));
