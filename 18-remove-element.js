// https://leetcode.com/problems/remove-element/?envType=problem-list-v2&envId=two-pointers

var removeElement = function(nums, val) {
    let k = 0; // position for next valid element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3,2,2,3], 3));