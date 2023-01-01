function main() {
  console.log(isUgly(14));
}

var isUgly = function (n) {
  if (n === 1 || n === 2 || n === 3 || n === 5) return true;

  const primeNumbers = (max) => {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  };

  const list = primeNumbers(20000);

  for (let i = 0; i < list.length; i++) {
    if (list[i] > 5) {
      if (n % list[i] === 0) {
        return false;
      }
    }
  }

  return true;
};

main();
