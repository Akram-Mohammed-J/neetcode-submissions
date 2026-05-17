class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Phase 1: count
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Phase 2: bucket by frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of map) {
            buckets[freq].push(num);
        }

        // Phase 3: walk high → low, collect until we have k
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
        return result;
    }
}
