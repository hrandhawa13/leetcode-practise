//https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=two-pointers


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left =0, right = height.length-1, maxArea =0, currentArea=0;
    while(left<right){
        currentArea = (right-left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea)
        if(height[left] < height[right])
            left++;
        else 
            right--;  
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));