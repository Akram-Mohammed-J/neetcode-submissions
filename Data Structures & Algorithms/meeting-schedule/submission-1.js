/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
            if (intervals.length <= 1) {
            return true
        }
         intervals.sort((a, b) => a.start - b.start)
        let { end: prevEnd } = intervals[0]
        for(let i=1; i< intervals.length; i++) {
            const {start , end} = intervals[i]
            if (start >= prevEnd) {
                prevEnd = end
            } else {
                return false
            }
        }
        return true

    }
}
