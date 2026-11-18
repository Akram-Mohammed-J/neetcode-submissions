class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        let tempArray = []

        function dfs(i) {
            if(i >= nums.length) {
                result.push([...tempArray])
                return
            }
            //chose to include the current element
            tempArray.push(nums[i])
            dfs(i+1)
            tempArray.pop()
            dfs(i+1)


        } 
        dfs(0)
        return result
    }
}
