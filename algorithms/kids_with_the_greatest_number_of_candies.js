function main(){
    console.log(kidsWithCandies([2,3,5,1,3], 3));
}

var kidsWithCandies = function(candies, extraCandies) {
    const greatest_number_of_candies = Math.max(...candies);

    return candies.map((candy) => {
        return candy + extraCandies >= greatest_number_of_candies;
    })
};


main();