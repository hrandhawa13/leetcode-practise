/**
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
    if(height.length < 3) return 0;
    let left =0, right =height.length-1, water = 0, maxHeightRight = 0, maxHeightLeft = 0;
    
    while(left<right){
        if(height[left] < height[right]){
            if(height[left] < maxHeightLeft)
                water += maxHeightLeft - height[left]
            else
                maxHeightLeft = height[left]
            left++;
        }else{
            if(height[right] < maxHeightRight)
                water += maxHeightRight - height[right]
            else
                maxHeightRight = height[right]
            right--;
        }

    }
    return water;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
