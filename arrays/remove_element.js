function main(){
    console.log(removeElement([3,2,2,3], 2));
}

var removeElement = function(nums, val) {
    var count = 0;
    
    for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};


main();