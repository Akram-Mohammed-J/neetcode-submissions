class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n);
        const suffix = new Array(n);
        const result = new Array(n);

        // prefix[i] = product of nums[0..i-1]  (everything LEFT of i, exclusive)
        prefix[0] = 1;
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // suffix[i] = product of nums[i+1..n-1]  (everything RIGHT of i, exclusive)
        suffix[n - 1] = 1;
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        // combine
        for (let i = 0; i < n; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
