function main(){
    console.log(uniqueMorseRepresentations(["a"]));
}

var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const translated_to_morse = [];

    let i = 0;
    do{
        let word_translated_to_morse = [];
        for(let j = 0; j < words[i].length; j++){
            word_translated_to_morse.push(morse[alphabet.indexOf(words[i][j])]);
        }
        translated_to_morse.push(word_translated_to_morse.join(""));
        i++;
    }while(i < words.length);

    return translated_to_morse.filter((word, index) => translated_to_morse.indexOf(word) === index).length;
};

main();