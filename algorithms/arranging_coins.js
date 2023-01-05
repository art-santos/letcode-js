const main = () => {
  return arrangeCoins(3);
};

var arrangeCoins = function (n) {
  const formula = Math.floor(Math.sqrt(2 * n));
  if (n >= (formula * (formula + 1)) / 2) {
    return formula;
  }
  return formula - 1;
};

console.log(main());
