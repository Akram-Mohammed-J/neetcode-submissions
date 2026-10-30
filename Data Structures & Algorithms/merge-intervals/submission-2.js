class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let result = [];
        if (intervals.length === 0) return result;

        intervals.sort((a, b) => a[0] - b[0]);

        let start = intervals[0][0];
        let end = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let currentInterval = intervals[i];

            if (currentInterval[0] <= end) {
                // Overlap: extend the running interval
                end = Math.max(end, currentInterval[1]);
            } else {
                // No overlap: save the running interval, start a new one
                result.push([start, end]);
                start = currentInterval[0];
                end = currentInterval[1];
            }
        }

        // Push the last running interval
        result.push([start, end]);
        return result;
    }
}