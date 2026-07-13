class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        let subset = [];
        let i = 0;
        function dfs(i, subset, result) {
            if (i === nums.length) {
                result.push([...subset]);
                return;
            }
            //  to include the current element that is left descision tree
            subset.push(nums[i]);
            dfs(i + 1, subset, result);
            // not to include the current element that is the right descision tree
            subset.pop();
            dfs(i + 1, subset, result);
        }

        dfs(0, subset, result);
        return result;
    }
}
