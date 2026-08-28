class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        // Standard (non-circular) House Robber over houses [start..end], memoized.
        // solve(i) = best money obtainable from house i through house `end`.
        function robLinear(start, end) {
            let cache = new Array(nums.length).fill(null);

            function solve(i) {
                if (i > end) return 0;                 // ran past the range — nothing left
                if (cache[i] !== null) return cache[i];

                let steal = nums[i] + solve(i + 2);      // rob house i, skip i+1, continue at i+2
                let skip = solve(i + 1);                  // don't rob house i, move to i+1

                cache[i] = Math.max(steal, skip);
                return cache[i];
            }

            return solve(start);
        }

        // Either exclude the LAST house, or exclude the FIRST house —
        // guarantees house 0 and house n-1 are never both robbed (the circular rule).
        return Math.max(
            robLinear(0, nums.length - 2),
            robLinear(1, nums.length - 1)
        );
    }
}