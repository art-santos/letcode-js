var isPalindrome = function (x) {
    return x.toString() === x.toString().split("").reverse().join("");
};
isPalindrome(121); // true
isPalindrome(-121); // false
