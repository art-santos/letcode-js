function main(){
    console.log(truncateSentence("I love you", 2));
}

var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).join(' ');
};

main();