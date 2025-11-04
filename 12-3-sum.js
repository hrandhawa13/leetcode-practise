/**
 https://leetcode.com/problems/3sum/description/

 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let sortedArray = nums.sort((a,b) => a-b);// SC O(n)
    // TC O(nlogn)
    let l = nums.length
    let results = [];
    for(let i=0; i< l; i++){
        console.log("Starting2");
        if (i>0 && sortedArray[i] === sortedArray[i-1])
            continue;
        const target = -sortedArray[i];
        let left = i+1, r = l-1;
        while(left<r){
            
            if(sortedArray[left] + sortedArray[r] === target){
                results.push([sortedArray[i], sortedArray[left], sortedArray[r]])
                left+=1;
                while(left<r && sortedArray[left] === sortedArray[left-1]){
                    left+=1
                }
            }else if(sortedArray[left] + sortedArray[r] < target ){
                left+=1
            }else{
                r-=1
            }
        }
    }
    return results;

};

console.log(threeSum([-1,0,1,2,-1,-4]));
