const isValid = (s: string) => {
  if (s.length % 2 !== 0) return false;

  let arr = [...s];

  const ordened: any = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      ordened.push(map.get(arr[i]));
    } else if (arr[i] !== ordened.pop()) {
      return false;
    }
  }
  return ordened.length === 0;
};

console.log(isValid("(]"));
