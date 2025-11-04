// https://leetcode.com/problems/hash-divided-string/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function stringHash(s, k) {
    const n = s.length;
    let result = "";

  for (let i = 0; i < n; i += k) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
        console.log("j is ", j)
      sum += (s.charCodeAt(j) - 'a'.charCodeAt(0));
    }
    console.log("i and sum, ", i, sum);
    const hashedValue = sum % 26;
    const ch = String.fromCharCode('a'.charCodeAt(0) + hashedValue);
    console.log(ch);
    result += ch;
  }

  return result;
};

console.log(stringHash("abcd", 2)); // bf
