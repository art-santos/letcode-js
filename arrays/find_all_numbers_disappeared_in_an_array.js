function main(){
    console.log(findDisappearedNumbers([1,1]));
}

var findDisappearedNumbers = function(nums) {
    let missing_numbers = [];
    let i = Math.max(...nums);
    do{
        if(nums.indexOf(i) === -1){
            missing_numbers.push(i);
        }
        i--;
    }while(i > 0);

    if(missing_numbers.length > 2){
        return missing_numbers.sort((a, b) => a - b);
    }else{
        return [Math.max(...nums) + 1];
    }
};


main();