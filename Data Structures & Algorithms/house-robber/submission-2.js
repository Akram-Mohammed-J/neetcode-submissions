class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = [].fill(null)
      function  solve(i) {
        if(i >= nums.length) {
            return 0
        }
        if(dp[i] != null) {
            return dp[i]
        }
        // decide to steal ith house
        let steal = nums[i] + solve(i+2)
        let skip =  solve(i+1)  
        dp[i] =  Math.max(steal, skip)
        return dp[i]

      }
      return solve(0)
    }
}
