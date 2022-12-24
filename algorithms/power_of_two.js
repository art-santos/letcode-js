function main() {
  console.log(isPowerOfTwo(2));
}

var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 2 === 0) {
    let str = n.toString(2) + "";

    if (Math.pow(2, str.length - 1) === n) {
      return true;
    }
  }
  return false;
};
main();
