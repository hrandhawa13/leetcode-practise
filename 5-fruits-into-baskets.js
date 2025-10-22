//https://leetcode.com/problems/fruit-into-baskets/description/

var totalFruit = function(fruits) {
    let left=0, right=0, totalFruits = 0;
    let fruitTypeCount = new Map();
    while(right< fruits.length){
        fruitTypeCount.set(fruits[right], (fruitTypeCount.get(fruits[right]) || 0) +1);
        while(fruitTypeCount.size > 2){
            //remove the left fruit here 
            fruitTypeCount.set(fruits[left], (fruitTypeCount.get(fruits[left]) - 1));
        if(fruitTypeCount.get(fruits[left]) === 0)
            fruitTypeCount.delete(fruits[left]);
        left++;
        }
        totalFruits = Math.max(totalFruits, (right-left+1))
        right++;
    }

    return totalFruits;
};

console.log(totalFruit([1,2,1]));
console.log(totalFruit([0,1,2,2]));
console.log(totalFruit([1,2,3,2,2]));