class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // KEY INSIGHT: nums has n+1 values, each in the range [1, n].
        // That means every value is a VALID INDEX into the array itself.
        // So we can treat the array as a graph: index i "points to" index nums[i].
        //
        // Since there are n+1 values squeezed into only n possible index slots
        // ([1..n]), by the pigeonhole principle at least two indices must point
        // to the SAME place — i.e. this graph is guaranteed to have a cycle.
        // The node where that cycle begins is exactly the duplicate value,
        // because two different indices "pointing" to it is precisely what
        // it means for a value to appear twice in the array.
        //
        // This turns "find the duplicate" into "find the entry point of a
        // cycle in a linked structure" — which is Floyd's Tortoise and Hare.

        // ---- PHASE 1: detect that a cycle exists, and find SOME point inside it ----
        let slow = nums[0]; // tortoise: moves 1 step at a time
        let fast = nums[0]; // hare: moves 2 steps at a time

        while (true) {
            // Advance BOTH pointers before checking anything. This matters:
            // slow and fast start out EQUAL (both = nums[0]), so if we checked
            // equality first, we'd exit on the very first pass without ever
            // having taken a step — that's a real bug this code specifically
            // avoids by advancing first, checking second.
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast) break; // they've met somewhere INSIDE the cycle
        }

        // ---- PHASE 2: find exactly where the cycle ENTERS (the duplicate itself) ----
        // Restart one pointer from the beginning. Move both pointers one step
        // at a time. Where they meet this time is provably the cycle's entry
        // point — this is the mathematical guarantee behind Floyd's algorithm.
        let slow2 = nums[0];
        while (slow !== slow2) {
            slow = nums[slow];
            slow2 = nums[slow2];
        }

        return slow; // this is the duplicate value
    }
}
