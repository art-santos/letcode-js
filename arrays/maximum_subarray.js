function main(){
    console.log(maxSubArray([-2,-11,-13,-2,-14,-9,-5,-15,-3]));
}

var maxSubArray = function (nums) {
    let biggest_sum = [...nums].reduce((a,b) => a + b);

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let sum = nums.slice(i, j).reduce((a,b) => a + b);
            if(sum > biggest_sum){
                biggest_sum = sum;
            }
        }
    }
    return biggest_sum;
}

/**
 * function maxSubarray(nums) {
    let currSum = -Infinity;
    let maxSum = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
    }
 * 
 */


main();