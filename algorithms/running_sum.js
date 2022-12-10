function main(){
    console.log(runningSum([1,2,3,4]));
}

var runningSum = function(nums) {
    let new_nums = [...nums];
    for (let n in nums){
        nums[n] = (new_nums.slice(0, parseInt(n)+1).reduce((a,b) => a+b));
    }
    return nums;
};

main();