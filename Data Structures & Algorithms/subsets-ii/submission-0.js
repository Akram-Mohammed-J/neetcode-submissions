class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        // sort so duplicates are adjacent - required for dedup logic to work
        nums.sort((a, b) => a - b)
        let n = nums.length
        let i = 0
        let result = []
        let subset = []

        function generateSubset(i, result, subset) {
            // base case: all decisions made, record the subset
            if (i == n) {
                result.push([...subset])
                return
            }

            // decision to INCLUDE the current element
            subset.push(nums[i])
            // recurse to decide the fate of the next element
            // NO skipping here - include branch always proceeds normally
            generateSubset(i + 1, result, subset)

            // backtrack: undo the include so we can try the exclude branch
            subset.pop()

            // decision NOT to include the current element (EXCLUDE branch)
            // if the next element is the same value, we must skip past it
            // otherwise we'd generate a duplicate subset:
            //   "include current, exclude next" == "exclude current, include next"
            // skip ALL consecutive duplicates, not just one
            let j = i
            while (j + 1 < n && nums[j] === nums[j + 1]) {
                j++
            }
            // recurse past all the duplicates
            generateSubset(j + 1, result, subset)
        }

        generateSubset(i, result, subset)
        return result
    }
}