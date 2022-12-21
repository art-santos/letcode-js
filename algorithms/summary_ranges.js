function main() {
  console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
}

var summaryRanges = function (nums) {
  if (nums.length == 0) return [];
  let current = 0;
  let last = 0;
  let dummyArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      last = i + 1;
      dummyArray.push(nums.slice(current, last));
      current = last;
    }
  }

  return dummyArray.map((item, i) => {
    if (item.length === 1) return `${item[0]}`;
    return `${item[0]}->${item[item.length - 1]}`;
  });
};

main();
