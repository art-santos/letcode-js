function main(){
    console.log(countKDifference([3,2,1,5,4], 2));
}

var countKDifference = function(nums, k) {
    let count = 0;

    nums.forEach((item, index) => {
        let i = index;
        do{
            if(Math.abs(item - nums[i]) === k){
                count++;
            }
            i++;
        }while(i <= nums.length-1);
    })

    return count;
};

main();