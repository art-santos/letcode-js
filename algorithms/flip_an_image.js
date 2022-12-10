function main(){
    console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
}

var flipAndInvertImage = function(image) {
    let new_arr = [];

    let i = 0;
    do{
        new_arr.push(image[i].reverse().map((i, index) => i == 0 ? 1 : 0));
        i++;
    }while(i < image.length);
    return new_arr;
};

main();