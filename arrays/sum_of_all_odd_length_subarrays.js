function main(){
    console.log(sumOddLengthSubarrays([1,4,2,5,3]));
}

var sumOddLengthSubarrays = function(arr) {
    let acc = 0;
    arr.forEach((item, index) => {
        let count = index;
        do{
            (arr.slice(index, count+1).length) % 2 !== 0 ? acc += (arr.slice(index, count+1).reduce((a,b) => a + b)) : null;
            count++;
        }while(count <= arr.length-1);
    })
    return acc;
};

main();