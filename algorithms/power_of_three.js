function main() {
  console.log(isPowerOfThree(26));
}
var isPowerOfThree = function (n) {
  if (n < 0 || n == 0) return false;
  if (n === 1 || n === 3) return true;
  if (n % 3 === 0) {
    return (Math.log(n) / Math.log(3)).toFixed(5) % 1 === 0;
  }
  return false;
};
main();
