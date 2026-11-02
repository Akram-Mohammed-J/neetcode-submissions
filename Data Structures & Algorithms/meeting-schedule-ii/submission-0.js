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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let count = 0;
        let start = intervals.map((i) => i.start).sort((a, b) => a - b);
        let end = intervals.map((i) => i.end).sort((a, b) => a - b);
        let endIndex = 0;
        for (let value of start) {
            if (value < end[endIndex]) {
                count++;
            } else {
                endIndex += 1;
            }
        }

        return count;
    }
}
