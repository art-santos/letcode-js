function main(){
    console.log(removeElement([0,1,2,2,3,0,4,2,1,2,2,2,2,2,2,2,2], 2));
}

var removeElement = function(nums, val) {
    let total_matches = 0;

    for (n in nums){
        if(nums[n] === val){
            delete nums[n];
            total_matches++;
        }
    }

    return nums.length - total_matches;
};


main();