function main(){
    console.log(sortArrayByParity([0,1,11,0,3,12,14,0,0]));
}

var sortArrayByParity = function(nums) {
    const even = nums.filter((num) => num % 2 === 0)
    const odd = nums.filter((num) => num % 2 !== 0)

    const sorted = even.concat(odd)
    return sorted;
};

main();