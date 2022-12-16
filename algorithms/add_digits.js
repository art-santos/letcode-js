function main() {
  console.log(addDigits(0));
}

var addDigits = function (num) {
  if (num < 10) return num;
  if (num === 10) return 1;
  do {
    num = Array.from(String(num), (number) => Number(number)).reduce(
      (a, b) => a + b
    );
  } while (num >= 10);
  return num;
};

main();
