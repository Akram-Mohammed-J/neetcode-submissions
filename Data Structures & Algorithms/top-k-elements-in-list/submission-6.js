class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];

        let nMap = new Map();
        for (let n of nums) {
            nMap.set(n, (nMap.get(n) || 0) + 1);
        }
        let buckets = new Array(nums.length + 1).fill(null).map(() => []);
        for (const [key, freq] of nMap) {
            buckets[freq].push(key);
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const key of buckets[i]) {
                result.push(key);
                if (result.length == k) return result;
            }
        }
    }
}
