function main(){
    console.log(buildArray([0,2,1,5,3,4]));
}

var buildArray = function(nums) {
    let new_nums = [...nums];
    for (let n in nums) {
        new_nums[n] = nums[nums[n]]
    }
    return new_nums;
};

main();