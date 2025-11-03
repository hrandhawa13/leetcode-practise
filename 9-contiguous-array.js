// https://leetcode.com/problems/contiguous-array/

/**
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0, sum=0;
    let sumMap = new Map();
    sumMap.set(0, -1);
    for(let i =0; i<nums.length; i++){
        let weight = nums[i] === 0 ? -1: 1;
        sum = sum + weight;
        if( !sumMap.has(sum)){
            sumMap.set(sum, i);
        }else {
            max = Math.max(max, (i - sumMap.get(sum)))
        }
    }


    return max;
};

console.log(findMaxLength([0,1]));
console.log(findMaxLength([0,1, 1,1]));
console.log(findMaxLength([0,1,1,1,0,0,1]));