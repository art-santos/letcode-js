function main(){
    console.log(twoSum([2,7,11,15], 9));
}

var twoSum = function(nums, target) {
    for (let n in nums){
        for (let m in nums){
            if(n !== m && nums[n] + nums[m] === target){
                return [n, m];
            }
        }
    }
};

main();