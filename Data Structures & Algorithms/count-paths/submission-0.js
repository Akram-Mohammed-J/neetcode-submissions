class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({ length: m }, () => new Array(n).fill(null));
        let sum = 0;
        function dfs(r, c) {
             // Out of bounds
            if (r >= m || c >= n) {
                return 0;
            }

            if (r == m - 1 && c == n - 1) {
                return 1;
            }
            if (dp[r][c] != null) {
                return dp[r][c];
            }

            dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
            return dp[r][c];
        }

        sum = dfs(0,0)
        return sum
    }
}
