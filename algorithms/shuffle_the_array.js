function main(){
    console.log(shuffle([1,2,3,4,4,3,2,1], 4));
}

var shuffle = function(nums, n) {
    let new_arr = [nums[0], nums[Math.floor(nums.length/2)], nums[1], nums[Math.floor(nums.length/2)+1]];
    for (let num in nums){
        num = parseInt(num);
        if (num !== 0 && num !== 1 && num !== Math.floor(nums.length/2) && num !== Math.floor(nums.length/2) + 1 && num !== Math.floor(nums.length/2) - 1 && num !== nums.length-1){
            new_arr.push(nums[num]);
        }
    }
    nums.length > 4 ? new_arr.push(nums[Math.floor(nums.length/2)-1], nums[nums.length-1]) : null;

    return new_arr;
};

main();