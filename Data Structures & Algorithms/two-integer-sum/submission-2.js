class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0; i<nums.length; i++) {
            let complement = target - nums[i]
            if(map.has(complement)) {
                return [map.get(complement), i]
            } else {
                map.set(nums[i], i)
            }
        }
        return[-1,-1]
    }
}
