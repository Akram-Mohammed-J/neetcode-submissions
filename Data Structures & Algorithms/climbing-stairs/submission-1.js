class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memoArray = new Array(n).fill(null);
        function dfs(n) {
            if (n < 0) {
                return -1;
            }
            if (n == 0) {
                return 1;
            }
            if (n == 1) {
                return 1;
            }
            let b1 = memoArray[n - 1];
            let b2 = memoArray[n - 2];
            if (b1 == null) {
                b1 = dfs(n - 1);
                memoArray[n - 1] = b1;
            }
            if (b2 == null) {
                b2 = dfs(n - 2);
                memoArray[n - 2] = b2;
            }

            return b1 + b2;
        }
        return dfs(n);
    }
}
