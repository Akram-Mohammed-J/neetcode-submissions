class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length).fill(-1);
        function dfs(i) {
            if (i == s.length) {
                // then we have found a way to decode the string
                return 1;
            }
            if (s[i] === "0") {
                // we can't map this into any character
                return 0;
            }
            if (dp[i] !== -1) {
                return dp[i];
            }
            let ways = 0;
            ways += dfs(i + 1);

            if (i + 2 <= s.length) {
                // so the range is inbound
                // now check whether the substring is  maping to valid character
                let twoDigit = parseInt(s.substring(i, i + 2));
                if (twoDigit <= 26) {
                    ways += dfs(i + 2);
                }
            }
            dp[i] = ways;
            return ways;
        }
        return dfs(0);
    }
}
