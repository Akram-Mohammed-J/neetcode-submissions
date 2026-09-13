class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set(wordDict);
    
        let memo = new Array(s.length + 1);
        function dfs(i) {
            if (i == s.length) {
                return true;
            }
             if (memo[i] !== undefined) {
                return memo[i];
            }

            for (let l = i + 1; l <= s.length; l++) {
                let temp = s.substring(i, l);
                if (wordSet.has(temp) && dfs(l)) {
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
