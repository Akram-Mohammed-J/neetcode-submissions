class Solution {
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) return mid;

            if (nums[l] <= nums[mid]) {
                // left half [l, mid] is sorted
                if (nums[l] <= target && target < nums[mid]) {
                    r = mid - 1;   // target is in the sorted left half
                } else {
                    l = mid + 1;   // target must be on the right
                }
            } else {
                // right half [mid, r] is sorted
                if (nums[mid] < target && target <= nums[r]) {
                    l = mid + 1;   // target is in the sorted right half
                } else {
                    r = mid - 1;   // target must be on the left
                }
            }
        }
        return -1;
    }
}