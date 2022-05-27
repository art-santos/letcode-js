function main(){
    console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
}

var duplicateZeros = function(arr) {
    const len = [...arr].length;

    let i = 0;
    do{
        if(arr[i] === 0){
            arr.splice(i, 0, 0);
            i++;
        }
        i++;
    }while(i<=arr.length-1);
    
    console.log(arr.length, len);

    if(arr.length > len){
        arr.splice(len, arr.length - len);
    }

    return arr;
};

main();