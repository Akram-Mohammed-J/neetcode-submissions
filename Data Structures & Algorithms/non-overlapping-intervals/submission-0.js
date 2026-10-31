class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let res = 0
        intervals.sort((a, b) => a[0]-b[0])
        let prevEnd = intervals[0][1]
        for(let i=1; i<intervals.length; i++) {
            let [start, end] = intervals[i]
            //check whether its not overlapping 
            if( start >= prevEnd ) {
                prevEnd = end // its not overlapping so update the new end
            } else {
                res+=1
                prevEnd = Math.min(end, prevEnd) // we need to take the minumum so that it will the shortest overlapping interval
            }
        }
        return res

    }
}
