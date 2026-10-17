class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // Convert kth largest into its equivalent
        // index in ascending order.
        //
        // Example:
        // [1, 2, 3, 4, 5, 6]
        // kth largest (k = 2) => index 6 - 2 = 4
        const target = nums.length - k;

        let l = 0;
        let h = nums.length - 1;

        while (l <= h) {

            // Always choose the LAST element as the pivot.
            const pivot = nums[h];

            // p represents the position where
            // the next element smaller than pivot
            // should be placed.
            let p = l;

            // Partition the array.
            //
            // Everything before p will be < pivot.
            // Everything from p to i will be >= pivot.
            for (let i = l; i < h; i++) {

                if (nums[i] < pivot) {

                    // Move the smaller element to the left side.
                    [nums[p], nums[i]] = [nums[i], nums[p]];

                    // Move p forward.
                    p++;
                }
            }

            // Put the pivot between the smaller
            // and larger elements.
            [nums[p], nums[h]] = [nums[h], nums[p]];

            // Now the pivot is at its final sorted position.
            if (p === target) {
                return nums[p];
            }

            // Target is to the RIGHT of the pivot.
            if (p < target) {
                l = p + 1;
            }

            // Target is to the LEFT of the pivot.
            else {
                h = p - 1;
            }
        }
    }
}