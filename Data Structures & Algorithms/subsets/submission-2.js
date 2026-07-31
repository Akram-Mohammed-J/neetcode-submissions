class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let i = 0;
        let n = nums.length;
        let result = [];
        let subsets = [];
        function dfs(i, subsets, result) {
            if (i === n) {
                result.push([...subsets]);
                return;
            }
            // decide to include
            subsets.push(nums[i]);
            dfs(i + 1, subsets, result);
            subsets.pop();
            dfs(i + 1, subsets, result);
        }
        dfs(i, subsets, result);
        return result;
    }
}
