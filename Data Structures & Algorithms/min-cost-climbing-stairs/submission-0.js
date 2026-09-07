class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp = new Array(cost.length + 1)

        function dfs(step) {
            if (step == 0 || step == 1) {
                return 0
            }

            if (dp[step] !== undefined) {
                return dp[step]
            }

            let b1 = dfs(step - 1) + cost[step - 1]
            let b2 = dfs(step - 2) + cost[step - 2]

            dp[step] = Math.min(b1, b2)

            return dp[step]
        }

        return dfs(cost.length)
    }
}
