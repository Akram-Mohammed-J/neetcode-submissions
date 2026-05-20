class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);

        for (const n of nums) {
            if (set.has(n - 1)) continue; // not a start, skip

            let current = 1; // count n itself
            let next = n + 1;
            while (set.has(next)) {
                current++;
                next++;
            }
            longest = Math.max(current, longest);
        }

        return longest;
    }
}
