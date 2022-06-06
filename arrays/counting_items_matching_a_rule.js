function main(){
    console.log(countMatches(
    [
        ["phone","blue","pixel"],
        ["computer","silver","lenovo"],
        ["phone","gold","iphone"]
    ],
        "color","silver"));
}

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    items.forEach((item) => {
        if (ruleKey == "type"){
            if (item[0] == ruleValue){
                count++;
            }
        }
        if (ruleKey == "color"){
            if (item[1] == ruleValue){
                count++;
            }
        }
        if (ruleKey == "name"){
            if (item[2] == ruleValue){
                count++;
            }
        }
    });
    
    return count;
};

main();