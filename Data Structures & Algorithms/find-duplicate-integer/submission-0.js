class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Phase 1: find a meeting point inside the cycle
    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: find the cycle entry
    let slow2 = nums[0];
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    
    return slow;
    }
}
