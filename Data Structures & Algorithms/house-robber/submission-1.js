class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let cache = new Array(nums.length).fill(null);
        function solve(i) {
            if (i >= nums.length) {
                return 0;
            }
            if (cache[i] !== null) {
                return cache[i];
            } else {
                let b1 = solve(i + 1);
                let b2 = nums[i] + solve(i + 2);
                let result = Math.max(b1, b2);
                cache[i] = result;
                return result;
            }
        }
        return solve(0);
    }
}