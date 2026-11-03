/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        
        let res = {};
        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        const sorterQueries = [...queries].sort((a, b) => a - b);
        let i = 0;

        for (let q of sorterQueries) {
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                minHeap.enqueue([r - l + 1, r]);
                i += 1;
            }
            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.dequeue();
            }

            res[q] = !minHeap.isEmpty() ? minHeap.front()[0] : -1;
        }
        return queries.map((q) => res[q]);
    }
}
