function main(){
    console.log(heightChecker([1,1,4,2,1,3]));
}


var heightChecker = function(heights) {
    const sorted_heights = [...heights].sort((a, b) => a - b);
    let i = 0;
    for (let n in heights){
        heights[n] !== sorted_heights[n] && i++;
    }
    return i;
};

main();