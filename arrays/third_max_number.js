function main(){
    console.log(thirdMax([1,2,2,5,3,5]));
}

var thirdMax = function(nums) {
    let arr_with_no_duplicates = [...new Set(nums)];
    return arr_with_no_duplicates.length >= 3
    ?
    arr_with_no_duplicates.sort((a, b) => b - a)[2]
    :
    Math.max(...arr_with_no_duplicates);
};

main();