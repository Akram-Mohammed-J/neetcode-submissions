class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let i = 0;
        let result = [];
        let subset = [];

        function generateSubset(i, result, subset) {
            // BASE CASE:
            if (i == nums.length) {
                result.push([...subset])
                return;
            }
            //recurrsive CASE
            const currentElement = nums[i];
            // decision to include the currentElement to the subset
            subset.push(currentElement);
            // genrate the subset on top of the currentSubset left tree
            generateSubset(i + 1, result, subset);
            // decision  to include the currentElement to the subset
            subset.pop();
            // genrate the subset on top of the currentSubset right tree
            generateSubset(i + 1, result, subset);
        }

        generateSubset(i, result, subset);
        return result;
    }
}
