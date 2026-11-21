class Solution {
    findTargetSumWays(nums, target) {
        let memo = new Map();

        function dfs(i, currentSum) {
            if (i >= nums.length) {
                return currentSum === target ? 1 : 0;
            }

            let key = i + "," + currentSum;
            if (memo.has(key)) {
                return memo.get(key);
            }

            let ways = dfs(i + 1, currentSum + nums[i]) + dfs(i + 1, currentSum - nums[i]);
            memo.set(key, ways);
            return ways;
        }

        return dfs(0, 0);
    }
}