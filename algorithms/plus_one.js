function main() {
  var plusOne = function (digits) {
    digits = digits.join("");
    let bigInt = BigInt(digits);
    bigInt = bigInt + 1n;
    bigInt = bigInt.toString();
    bigInt = bigInt.split("");
    return bigInt.map((item) => Number(item));
  };
  console.log(plusOne([9]));
}

main();
