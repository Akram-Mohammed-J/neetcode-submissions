class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const memo = new Array(s.length + 1);

        function dfs(i) {
            if (i === s.length) {
                return true;
            }

            if (memo[i] !== undefined) {
                return memo[i];
            }

            for (let l = i + 1; l <= s.length; l++) {
                const word = s.substring(i, l);

                if (wordSet.has(word) && dfs(l)) {
                    memo[i] = true;
                    return true;
                }
            }

            memo[i] = false;
            return false;
        }

        return dfs(0);
    }
}
