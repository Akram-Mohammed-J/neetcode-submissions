class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length,
            n = word2.length;
        let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));
        const dfs = (i, j) => {
            if (i === m) return n - j;
            if (j === n) return m - i;
            if (dp[i][j] != -1) return dp[i][j];

            if (word1[i] === word2[j]) {
                dp[i][j] = dfs(i + 1, j + 1);
            } else {
                let res = Math.min(dfs(i + 1, j), dfs(i, j + 1));
                res = Math.min(res, dfs(i + 1, j + 1));
                dp[i][j] = res + 1;
            }
            return dp[i][j];
        };

        return dfs(0, 0);
    }
}