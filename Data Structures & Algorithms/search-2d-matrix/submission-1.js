class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(nums, target) {
        console.log(nums)
        let left = 0
        let right = nums.length -1
        while (left <= right) {
            let mid = Math.floor((left + right)/2)
            let val = nums[mid]
            if (val == target) return mid
            if(val < target) {
                left = mid + 1
            } else  {
                right = mid - 1 
            }
        }
        return -1
    }
    searchMatrix(matrix, target) {
        for (let row = 0; row < matrix.length; row++) {
         let out =  this.binarySearch(matrix[row], target)
            if(out > -1) return true
        } 
        return false
    }
}