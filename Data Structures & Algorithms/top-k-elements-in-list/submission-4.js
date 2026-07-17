class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        let buckets = new Array(nums.length+1).fill(null).map(() => []);

        for (const [key, freq] of map) {
            buckets[freq].push(key);
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
             for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
        return result;
    }
}
