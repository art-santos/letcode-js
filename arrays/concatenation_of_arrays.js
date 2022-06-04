function main(){
    console.log(getConcatenation([1,2,1]));
}

var getConcatenation = function(nums) {    
    return nums.concat(nums);
};

main();