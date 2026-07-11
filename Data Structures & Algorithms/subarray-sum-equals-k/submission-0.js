class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSumCount = new Map();
        prefixSumCount.set(0, 1);
        let count = 0;
        let sum = 0;
        for (let num of nums) {
            sum += num;
            if (prefixSumCount.has(sum - k)) {
                count += prefixSumCount.get(sum - k);
            }
            prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
        }
        return count;
    }
}
