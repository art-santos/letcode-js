function main(){
    console.log(merge([0],0,[1],1));
}

var merge = function(nums1, m, nums2, n) {

    nums1.splice(m, n, ...nums2);
    
    return nums1.sort((a, b) => a - b);
};

main();