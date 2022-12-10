function main(){
    console.log(maxSubArray([-2,-11,-13,-2,-14,-9,-5,-15,-3]));
}

var maxSubArray = function (nums) {
    let sum = -Infinity;
    let max = -Infinity;
    for(n in nums) {
        sum = Math.max(0, sum);
        sum += nums[n];
        max = Math.max(max, sum);
    }
    return max;
}

main();


/**
 * var maxSubArray = function (nums) {
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

 */