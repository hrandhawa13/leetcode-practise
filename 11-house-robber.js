/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let l = nums.length
    if (l === 0) return 0;
    if (l === 1) return nums[0];
    let dp = Array(l).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i =2; i<l; i++){
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }
    return dp[l-1];
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));