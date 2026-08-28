// bottom up Solution

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length
        let dp = []; // what is the dp state represent : dp[i] is how much money we can steel from the houses upto ith position
        // so dp[0] = 0 and dp[1] = nums[0]
        dp[0] = 0;
        dp[1] = nums[0];
        for (let i = 2; i <= n; i++) {
            // if I steal the ith house position I cant steal the  i - 1 because we can't steal the adjacent house but I can steel the  house in i-2 position
            let steel = nums[i-1] + dp[i - 2];

            // skip : if I didnt steal the house in ith position i can steal the house in i-1 location
            let skip = dp[i - 1];
            dp[i] = Math.max(steel, skip);
        }
        return dp[n]
    }
}
