class Solution {
    /**
     * @param {number[]} nums     - array of distinct candidate numbers (positive)
     * @param {number} target     - the value each combination must sum to
     * @returns {number[][]}      - list of unique combinations that sum to target
     *
     * Each candidate can be used UNLIMITED times.
     * That's the "reuse" property — a number can appear multiple times
     * in a single combination.
     *
     * Example: nums=[2,3,6,7], target=7 → [[2,2,3], [7]]
     */
    combinationSum(nums, target) {
        // Starting index. We'll always begin exploring from index 0.
        let i = 0;

        // Where we collect all valid combinations (each is an array).
        let result = [];

        // The current working combination we're building up during recursion.
        // This is MUTATED as we push/pop during backtracking.
        let combination = [];

        // Running sum of the current combination.
        // Kept in sync with `combination` — whenever we push/pop, sum changes too.
        let sum = 0;

        /**
         * Recursive backtracking function.
         *
         * @param {number} i           - current index in `nums` we're deciding about
         * @param {number[][]} result  - passed for reference (captured via closure would also work)
         * @param {number[]} combination - current partial combination (mutated in place)
         * @param {number} sum         - current sum of `combination`
         *
         * At each call, we make ONE of two decisions about nums[i]:
         *   1. INCLUDE nums[i] again (recurse at same i — reuse allowed)
         *   2. SKIP nums[i] entirely (recurse at i+1 — never use it again)
         *
         * Both branches always execute (unless a base case stops us first).
         */
        function generate(i, result, combination, sum) {
            // ─── BASE CASE 1: SUCCESS ───
            // We've built a combination that exactly matches the target.
            // Record a SNAPSHOT of combination (via spread) — a plain push would
            // store a reference to the array, and future mutations would corrupt it.
            if (sum == target) {
                result.push([...combination]);
                return;
            }

            // ─── BASE CASE 2: DEAD END ───
            // Either we've run out of candidates to try (i beyond array),
            // OR we've overshot the target (sum > target means no way back —
            // all candidates are positive, so sum can only increase).
            // Prune this branch entirely.
            if (i >= nums.length || sum > target) return;

            // ─── DECISION 1: INCLUDE nums[i] ───
            // Add nums[i] to our combination and update the running sum.
            combination.push(nums[i]);
            sum += nums[i];

            // Recurse WITH SAME INDEX (i, not i+1).
            // This is what allows unlimited reuse: after including nums[i],
            // we might include it again on the next call. E.g., 2+2+3=7.
            generate(i, result, combination, sum);

            // ─── BACKTRACK ───
            // Undo the include so we can try the alternative decision.
            // Pop from combination (mirrors the earlier push).
            combination.pop();

            // ─── DECISION 2: SKIP nums[i] ───
            // Move on to the next candidate (i+1). We're committing to using
            // nums[i] ZERO times from this branch onward.
            //
            // Note the `sum - nums[i]`: we mutated `sum` earlier (line "sum += nums[i]"),
            // but the skip branch shouldn't see that increment. Rather than mutating
            // sum back to its original value, we just pass the un-inflated value inline.
            // (Passing `sum - nums[i]` is equivalent to doing `sum -= nums[i]` before this call.)
            generate(i + 1, result, combination, sum - nums[i]);
        }

        // Kick off the recursion with initial state:
        // starting at index 0, empty combination, sum 0.
        generate(i, result, combination, sum);

        return result;
    }
}