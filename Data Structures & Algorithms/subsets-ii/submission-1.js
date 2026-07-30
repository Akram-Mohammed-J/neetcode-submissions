class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        let result = [];
        let subSet = [];
        let i = 0
        let n = nums.length
        function dfs(i, subSet, result) {
            if (i == n) {
                result.push([...subSet]);
                return;
            }
            //desicion to include
            subSet.push(nums[i]);
            dfs(i + 1, subSet, result);
            //desicion not to include current element
            subSet.pop();
            // skip the duplicates
            let j = i;
            while (j + 1 <  n && nums[j] == nums[j + 1]) {
                j++;
            }
            dfs(j + 1, subSet, result);
        }   
         dfs(i, subSet, result);
         return result
    }
}
