function main() {
  console.log(isPowerOfFour(3));
}
var isPowerOfFour = function (n) {
  if (n < 0 || n == 0) return false;
  if (n == 1 || n == 4) return true;
  if (n % 4 == 0) {
    let len = n.toString(2).toString().length;
    if (len % 2 == 1) {
      return Math.pow(2, len - 1) === n;
    }
  }
  return false;
};
main();
