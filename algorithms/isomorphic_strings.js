function main() {
  console.log(isIsomorphic("foo", "bar"));
}

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let coordinatesS = {};
  let coordinatesT = {};

  for (let i = 0; i < s.length; i++) {
    if (coordinatesS[s.indexOf(s[i])] !== undefined) {
      coordinatesS[s.indexOf(s[i])].push(i);
    } else {
      coordinatesS[s.indexOf(s[i])] = [i];
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (coordinatesT[t.indexOf(t[i])] !== undefined) {
      coordinatesT[t.indexOf(t[i])].push(i);
    } else {
      coordinatesT[t.indexOf(t[i])] = [i];
    }
  }

  for (let property in coordinatesS) {
    if (coordinatesS[property].join("") !== coordinatesT[property].join("")) {
      return false;
    }
  }
  return true;
};

main();
