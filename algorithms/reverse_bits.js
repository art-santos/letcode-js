function main() {
  console.log(reverseBits(11111111111111111111111111111101));
}

var reverseBits = function (n) {
  let bits = n.toString(2);
  bits = bits.split("").reverse().join("");
  //always going to be a 32 bit integer
  for (i = 0; i < 32; i++) {
    if (bits[i] === undefined) {
      bits += 0;
    }
  }
  return parseInt(bits, 2);
};

main();
