function main() {
  console.log(hammingWeight(00000000000000000000000000001011));
}

var hammingWeight = function (n) {
  let bits = n.toString(2);
  let positive = 0;
  //always going to be a 32 bit integer
  for (i = 0; i < 32; i++) {
    if (bits[i]) {
      positive += 1;
    }
  }
  return positive;
};

main();
