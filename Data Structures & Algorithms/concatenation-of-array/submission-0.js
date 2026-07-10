class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(2 * nums.length)
        let i = 0 
        while(i < nums.length) {
            ans[i] = nums[i]
            ans[i+nums.length] = nums[i]
            i++
        }
        return ans
    }
}
