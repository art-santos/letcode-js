function main() {
  console.log(isPowerOfTwo(4));
}

var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};

main();
