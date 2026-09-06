class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
        if (total % 2 !== 0) {
            return false;
        }
       
        const dpState = new Map();
        function dfs(i, sum1, sum2) {
            const key = `${i},${sum1},${sum2}`;
            if (i === nums.length) {
                return sum1 === sum2;
            }
            if (dpState.has(key)) {
                return dpState.get(key);
            }
            if (dfs(i + 1, sum1 + nums[i], sum2)) {
                dpState.set(key, true);
                return true;
            }
            if (dfs(i + 1, sum1, sum2 + nums[i])) {
                return true;
            }
            dpState.set(key, false);
            return false;
        }

        return dfs(0, 0, 0);
    }
}
