function main(){
    console.log(maxProfit([2,1,2,0,1]));
}
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];

    for(let i = 0; i < prices.length; i++){
        let sell = prices[i];
        let difference = sell - min;
        max = Math.max(max, difference);
        sell < min ? min = sell : null;
    }
    return max;
};
main();

