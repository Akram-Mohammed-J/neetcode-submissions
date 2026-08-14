class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let arr = new Array(nums.length).fill(0);
        for(let i= 0; i< nums.length; i++) {
            arr[nums[i]] =  arr[nums[i]]+1
            if( arr[nums[i]] > 1) {
                return nums[i]
            }
        }
    }
}
