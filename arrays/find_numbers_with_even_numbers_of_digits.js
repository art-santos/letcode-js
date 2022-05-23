function main () {
    console.log(findNumbers([12,345,2,6,7896]))
}


var findNumbers = function(nums) {
    let even_number_of_digits = [];
    
    for(n in nums) {
        nums[n].toString().length % 2 === 0 && 
        even_number_of_digits.push(nums[n]) 
    }

    return even_number_of_digits.length;
}

main();