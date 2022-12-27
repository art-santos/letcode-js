function main() {
  console.log(isAnagram("anagram", "nagaram"));
}

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let mapS = alphabet.reduce((acc, curr) => ((acc[curr] = 0), acc), {});
  let mapT = alphabet.reduce((acc, curr) => ((acc[curr] = 0), acc), {});

  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = mapS[s[i]] + 1;
    mapT[t[i]] = mapT[t[i]] + 1;
  }

  return Object.keys(mapS).every((k) => mapS[k] === mapT[k]);
};

main();
