/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map();
    let left = 0, right = numbers.length-1;
    while(left < right){
        if(numbers[left] + numbers[right] === target)
            return [left+1, right+1];
        else if(numbers[left] + numbers[right] > target)
            right -=1;
        else
            left+=1
    }
    return [];
    
};

console.log(twoSum([2,7,11,15], 9))