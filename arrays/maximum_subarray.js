function main(){
    console.log(maxSubArray([-2,-11,-13,-2,-14,-9,-5,-15,-3]));
}

var maxSubArray = function (nums) {
    let sum = -Infinity;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        sum = Math.max(0, sum);
        sum += nums[i];
        max = Math.max(max, sum);
    }
    return max;
}

main();