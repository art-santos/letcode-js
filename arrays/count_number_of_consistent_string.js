function main(){
    console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
}

var countConsistentStrings = function(allowed, words) {
    let consistent_count = 0;

    words.forEach((word, index) => {
        let is_consistent = true;
        let word_string = word.split('').sort();
        word_string.forEach((item, index) => {
            if (allowed.split('').sort().indexOf(item) === -1) {
                is_consistent = false;
            }
        })
        if (is_consistent) {
            consistent_count++;
        }
    })
    return consistent_count;
};

main();