function main(){
    removeDuplicates([1,1,2])
}

var removeDuplicates = function(nums) {
    let i=0;
    for (let j=i+1; j<nums.length; j++) {
        if (nums[i]===nums[j]) {
            nums.splice(j,1);
            j--;
        }else {
            i=j
        } 
    }
    return nums.length;
};