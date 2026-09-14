class Solution {

    lengthOfLIS(nums) {

        const dp = new Map();

        function dfs(i, prev) {

            if (i === nums.length) {
                return 0;
            }

            const key = `${i}-${prev}`;

            if (dp.has(key)) {
                return dp.get(key);
            }

            let take = 0;

            if (nums[i] > prev) {
                take = 1 + dfs(i + 1, nums[i]);
            }

            let skip = dfs(i + 1, prev);

            const result = Math.max(take, skip);

            dp.set(key, result);

            return result;
        }

        return dfs(0, -Infinity);
    }
}