// Two Sum problem 
// LeetCode Link: https://leetcode.com/problems/two-sum/

/*
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target
 */

// Brute force- check each pair
// TC= O(n^2)

// using hash map
// Store numbers already seen
// For each num, see if target - num already exists in the map 

function twoSum(nums, target){
    const map = new Map();
    for(let i=0; i< nums.length; i++){
        let diff = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums = [4, 9, 11, 15];
const target = 15;
console.log(twoSum(nums, target));