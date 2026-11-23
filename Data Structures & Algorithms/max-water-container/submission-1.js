class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length -1
        let maxArea  = 0
        while ( l < r ) {
            let width = r - l
            let height = Math.min(heights[l], heights[r]);
            let currentArea = height * width;
            maxArea = Math.max(currentArea, maxArea) 
            if(heights[l] < heights[r]) {
                l++
            }else {
                r--
            }
        }
        return maxArea
    }
}
