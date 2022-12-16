function main() {
  console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3));
}

var containsNearbyDuplicate = function (nums, k) {
  let hashTable = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashTable.has(nums[i]) && hashTable.size <= k) return true;
    hashTable.add(nums[i]);
    if (hashTable.size > k) hashTable.delete(nums[i - k]);
  }

  return false;
};

main();
