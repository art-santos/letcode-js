function main(){
    console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
}

var mostWordsFound = function(sentences) {
    let count = Array(sentences.length).fill(0);
    for (let s in sentences){
        let words = sentences[s].split(" ");
        for (let w in words){
            count[s] += 1;
        }
    }
    return Math.max(...count);
};

main();