function main() {
  console.log(climbStairs(2));
}
var climbStairs = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n >= 3) {
    let variants = 2;
    let acc = 0;
    let acc1 = 1;
    let acc2 = 2;

    do {
      acc = acc1 + acc2;
      if (variants < n) {
        acc1 = acc2;
        acc2 = acc;
      }
      variants++;
    } while (variants < n);
    return acc;
  }
};

main();
