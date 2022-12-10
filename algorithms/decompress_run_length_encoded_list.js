function main(){
    console.log(decompressRLElist([1,2,3,4,5,6,7,8]));
}

var decompressRLElist = function(nums) {
    let count = 0;
    let new_arr = [];

    do{
    let iterate = nums.slice(count, count+2);
        let times = iterate[0];
        do{
            new_arr.push(iterate[1]);
            times--;
        }while(times > 0)
        count += 2;
    }while(count <= nums.length-1);

    return new_arr;
};

main();