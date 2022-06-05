function main(){
    console.log(numIdenticalPairs([1,2,3,4,4,3,2,1]));
}

var numIdenticalPairs = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                count++;
            }
        }
    }
    return count;
};

main();