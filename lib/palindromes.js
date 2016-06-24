function isPalindrome(s) {
  var condensed = s.split(" ").join("");
  var stringReverse = condensed.split("").reverse().join("");
  return condensed == stringReverse;
}

module.exports = isPalindrome;



// function isPalindrome(s) {
//   var stringReverse = s.split("").reverse().join("");
//   return s == stringReverse;
// }

// module.exports = isPalindrome;