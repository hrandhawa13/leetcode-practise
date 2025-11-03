/*
https://leetcode.com/problems/coin-change/
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i =0; i<=amount; i++){
        for(let c of coins){
            if(i-c >=0){
                dp[i] = Math.min(dp[i], 1+dp[i-c]);
            }            
        }
    }
    return dp[amount] > amount? -1:dp[amount];
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([1,2,5], 9));
console.log(coinChange([2,5], 3));
console.log(coinChange([1], 0));
