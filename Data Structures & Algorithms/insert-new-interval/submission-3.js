class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];
        let i = 0;
        let n = intervals.length;

        // PHASE 1: every interval that ends before newInterval even starts
        // needs no merging at all -- just copy it through untouched.
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        // PHASE 2: every interval that OVERLAPS newInterval gets absorbed
        // into it. We don't push anything yet -- we keep growing newInterval
        // itself until nothing left overlaps it.
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
            i++;
        }
        // the merge loop is done -- push the final, fully-merged newInterval
        // exactly ONCE, right here.
        result.push(newInterval);

        // PHASE 3: everything left starts after newInterval ends --
        // no more merging possible, just copy the rest through.
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}