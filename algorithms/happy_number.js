function main() {
  console.log(isHappy(19562515615616515414514514514515454));
}

var isHappy = function (n) {
  if (n == 1) return true;
  const hashTable = new Set();
  while (hashTable.size < Number.MAX_SAFE_INTEGER) {
    n = Array.from(String(n), (num) => Math.pow(Number(num), 2)).reduce(
      (a, b) => a + b
    );
    if (hashTable.has(n)) return false;
    hashTable.add(n);
    if (n === 1) return true;
  }

  return false;
};

main();
