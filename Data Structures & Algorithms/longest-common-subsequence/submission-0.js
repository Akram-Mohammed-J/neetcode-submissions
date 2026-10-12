class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dpState = Array.from({ length: text1.length }, () =>
            new Array(text2.length).fill(null),
        );
        function dfs(i, j) {
        
            if (i == text1.length || j == text2.length) return 0;
                if (dpState[i][j] !== null) {
                return dpState[i][j];
            }
            if (text1[i] === text2[j]) {
                dpState[i][j] = 1 + dfs(i + 1, j + 1);
                return dpState[i][j];
            }
            dpState[i][j] = Math.max(dfs(i, j + 1), dfs(i + 1, j));
            return dpState[i][j];
        }
        return dfs(0, 0);
    }
}
