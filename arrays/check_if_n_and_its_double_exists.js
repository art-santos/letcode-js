function main(){
    console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
}

var checkIfExist = function(arr) {
    let does_double_exists = false;
    let positives = arr.filter((value) => value > 0);
    let negatives = arr.filter((value) => value < 0);
    let zeros = arr.filter((value) => value === 0);

    zeros.length > 1 ? does_double_exists = true : null;

    for (n in positives){
        if(positives.indexOf(positives[n]/2) !== -1){
            does_double_exists = true;
        }
    }

    for (n in negatives){
        if(negatives.indexOf(negatives[n]/2) !== -1){
            does_double_exists = true;
        }
    }

    return does_double_exists;
};

main();