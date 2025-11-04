// https://leetcode.com/problems/maximum-subarray/
/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
 if(nums.length ===1) return nums[0]
    let sumArr = [], max = nums[0];
    sumArr[0] = nums[0];

    for (let i =1; i< nums.length; i++){
        console.log(nums[i], ", ", sumArr[i-1]);
        sumArr[i] = Math.max(nums[i], nums[i] + sumArr[i-1]);
        if(sumArr[i] > max)
            max = sumArr[i]
    }
    for(let s of sumArr)
        console.log(s);
    return max;
};

//better approach 
var maxSubArray2 = function(nums) {
    let maxSum = nums[0];      // Global maximum
    let currentSum = nums[0];  // Current subarray sum
    
    for (let i = 1; i < nums.length; i++) {
        // Key decision: extend current subarray OR start new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));