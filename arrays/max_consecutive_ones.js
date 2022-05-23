function main (){
    console.log(findMaxConsecutiveOnes([0]))
}

var findMaxConsecutiveOnes = function(nums) {
    if(nums.indexOf(1) >= 0){
        let i = 0;
        let k = 0;
        let sequences = [];

        do{
            if(nums[i] === 1 && nums[i+1] === 1){
                k++;
            }else{
                sequences.push(k);
                k=0;
            }
            i++;
        }while(i<nums.length)

        return Math.max(...sequences) + 1;
    }
    return 0
};


main();