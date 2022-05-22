function main(){
    console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
}

var duplicateZeros = function(arr) {
    let array_with_duplicated_zeros = [];

    for (n in arr){
        arr[n] === 0 ?
        array_with_duplicated_zeros.push(0, 0)
        :
        array_with_duplicated_zeros.push(arr[n]);
    }

    return array_with_duplicated_zeros;
};

main();