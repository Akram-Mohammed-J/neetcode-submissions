class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let furthest = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > furthest) {
                return false; // this position is unreachable -- nothing earlier could jump far enough
            }
            furthest = Math.max(furthest, i + nums[i]);
        }

        return true;
    }
}
