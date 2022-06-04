function main(){
    console.log(finalValueAfterOperations(["--X","X++","X++"]))
}

var finalValueAfterOperations = function(operations) {
    let acc = 0;
    for (let o in operations) {
        if (operations[o] === "X++" || operations[o] === "++X") {
            acc = acc + 1;
        }

        if (operations[o] === "--X" || operations[o] === "X--") {
            acc = acc - 1;
        }
    }
    return acc;
};

main();