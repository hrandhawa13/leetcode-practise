// 3. Longest Substring Without Repeating Characters

//Given a string s, find the length of the longest substring without duplicate characters.


var lengthOfLongestSubstring = function(s) {
    let left =0, right=0, result =0;
    let set = new Set();
    while(right< s.length){
        while(set.has(s.charAt(right))){
            set.delete(s.charAt(left));
            left++;
        }

        set.add(s.charAt(right))
        result = Math.max(result, set.size)
        right++;
    }
    return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("jbpnbwwd"));