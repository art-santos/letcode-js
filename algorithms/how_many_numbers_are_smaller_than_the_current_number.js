function main(){
    console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
}

var smallerNumbersThanCurrent = function(nums) {
    let smallers = [];
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++;
            }
        }
        smallers.push(count);
    }
    return smallers;
};

main();