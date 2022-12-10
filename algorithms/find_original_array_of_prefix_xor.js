function main() {
  var findArray = function (pref) {
    let arr = [pref[0]];
    for (let i = 0; i < pref.length - 1; i++) {
      arr[i + 1] = pref[i] ^ pref[i + 1];
    }
    return arr;
  };
  console.log(findArray([13]));
}
main();
