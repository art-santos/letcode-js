function main(){
    console.log(replaceElements([17,18,5,4,6,1]));
}

var replaceElements = function(arr) {
    const len = arr.length;
    let i = 0;
    let replaced = [];
    do{
        arr.shift();
        replaced.push(Math.max(...arr) !== -Infinity ? Math.max(...arr) : -1);
        i++;
        console.log(arr);
    }while(i <= len-1);
    return replaced;
};

main();