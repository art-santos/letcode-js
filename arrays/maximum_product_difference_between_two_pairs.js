function main(){
    console.log(maxProductDifference([5,6,2,7,4]));
}

var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
};

main();