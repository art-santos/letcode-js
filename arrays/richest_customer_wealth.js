function main(){
    console.log(maximumWealth([[1,2,3],[3,2,1]]));
}

var maximumWealth = function(accounts) {
    return accounts.reduce((a,b) => a.reduce((c,d) => c+d) > b.reduce((c,d) => c+d) ? a : b).reduce((a,b) => a+b);
};

main();