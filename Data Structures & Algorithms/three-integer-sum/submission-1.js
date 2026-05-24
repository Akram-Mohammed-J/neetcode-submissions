class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {
        nums.sort((a, b)=> a - b)
        const result = []
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break; // optimization
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    result.push([nums[i], nums[left], nums[right]]);

                    // Skip duplicate left
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate right
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
            }
        }
         return result;
    }
}
