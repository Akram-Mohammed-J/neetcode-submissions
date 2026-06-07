class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    //The core idea of sorted rotated array is sorted when we split into to equal halves
    findMin(nums) {
        let res = nums[0]
        let left = 0;
        let right = nums.length -1 ;
        while (left <= right) {
            if(nums[left] < nums[right]) {
                res = Math.min(res, nums[left])
                break;  
            }
            let mid = Math.floor((left + right) / 2);
            res = Math.min(res, nums[mid])
            if(nums[mid] >= nums[left]) {
                //search only right 
                left = mid +1
            } else {
                //search only left
                right = mid -1
            }
        }
        return res
    }
}
