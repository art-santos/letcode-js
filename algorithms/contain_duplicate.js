function main() {
  console.log(containsDuplicate([1, 2, 3, 1]));
}

var containsDuplicate = function (nums) {
  if (nums.length <= 1) return false;
  const hashset = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) {
      return true;
    }
    hashset.add(nums[i]);
  }
  return false;
};

main();
