class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let i = 0;
        let result = [];
        let combinations = [];
        let sum = 0;

        function dfs(i, result, combinations, sum) {
            //BASE CASE
            if (sum == target) {
                result.push([...combinations]);
                return;
            }
            if (i >= nums.length  || sum > target) {
                return;
            }

            //decide to include
            combinations.push(nums[i]);
            sum += nums[i];
            dfs(i, result, combinations, sum);
            // decide to not include
            combinations.pop()
            sum-= nums[i]
            dfs(i+1, result, combinations, sum)
        }
        dfs(i, result, combinations, sum);
        return result
    }
}
