class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = []; // stores INDICES, values decreasing from front to back

        for (let r = 0; r < nums.length; r++) {
            // remove indices from the back whose values are smaller than the
            // one coming in — they can never be the max again, nums[r] beats them
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }
            deque.push(r);

            // the front of the deque has fallen out of the window — discard it
            if (deque[0] <= r - k) {
                deque.shift();
            }

            // once we've seen at least k elements, the front is this window's max
            if (r >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
