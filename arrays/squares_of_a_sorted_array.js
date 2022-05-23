function main () {
    sortedSquares([-4,-1,0,3,10]);
}

var sortedSquares = function(nums) {
    let squared = [];

    for (n in nums){
        squared.push(Math.pow(nums[n], 2));
    }
        
    return squared.sort((a,b) => a-b);
};

main();