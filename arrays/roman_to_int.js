function romanToInt(s: string): number {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i]);
    const next = romanMap.get(s[i + 1]);
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
