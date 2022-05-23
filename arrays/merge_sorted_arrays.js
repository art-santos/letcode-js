function main(){
    console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
}

var merge = function(nums1, m, nums2, n) {
    const slice_to_merge_1 = nums1.slice(0, m);
    const slice_to_merge_2 = nums2.slice(0, n);
    const merged_arrays = slice_to_merge_1.concat(slice_to_merge_2);

    return merged_arrays.sort((a,b) => a - b);
};

main();