function main(){
    console.log(moveZeroes([0,1,11,0,3,12,14,0,0]));
}

var moveZeroes = function(nums) {
    const zeroes = nums.filter((num, index) => num === 0)

    const non_zeroes = nums.filter((num) => num !== 0)

    for (let n in non_zeroes){
        nums[n] = non_zeroes[n];
    }
    for (let z in zeroes){
        nums[(nums.length - 1) - z] = 0;
    }

    return nums;
};

main();