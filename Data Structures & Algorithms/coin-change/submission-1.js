class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        coins.sort((a, b) => a - b);
        let memo = new Map();
        memo.set(0, 0);
        function dfs(amt) {
            if (memo.has(amt)) {
                return memo.get(amt);
            }
            // else so far we didnt able to make that amount
            let min = Infinity;
            for (let coin of coins) {
                let diff = amt - coin;
                if (diff < 0) {
                    break;
                }
                min = Math.min(min, 1 + dfs(diff));
            }
            memo.set(amt, min);
            return min;
        }
        let result = dfs(amount);
        return result == Infinity ? -1 : result;
    }
}
