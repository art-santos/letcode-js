function main(){
    console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
}

var createTargetArray = function(nums, index) {
    let new_arr = [];
    for (let n in index){
        let position = index[n];
        let number = nums[n];
        new_arr.splice(position, 0, number);
    }
    return new_arr;
};

main();