/*
 Last Stone Weight (LeetCode 1046)

 Each turn, take the two heaviest stones, x >= y:
   - if x == y, both are destroyed
   - if x != y, y is destroyed and x becomes x - y
 Return the weight of the last stone, or 0 if none remain.

 Idea: we repeatedly need the LARGEST stone, so use a MAX-heap.
 A max-heap is a min-heap with the comparison flipped, so the
 largest value sits at the root.

 Time:  O(n log n)   Space: O(n)
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Index formulas (0-based)
    #parent(i) { return Math.floor((i - 1) / 2); }
    #left(i)   { return 2 * i + 1; }
    #right(i)  { return 2 * i + 2; }

    #swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Move a node up while it is LARGER than its parent
    #siftUp(i) {
        while (i > 0) {
            const p = this.#parent(i);
            // Parent already >= child, so the heap property holds
            if (this.heap[p] >= this.heap[i]) break;
            this.#swap(p, i);
            i = p;
        }
    }

    // Move a node down while a child is LARGER than it
    #siftDown(i) {
        const n = this.heap.length;
        while (true) {
            const l = this.#left(i);
            const r = this.#right(i);
            let largest = i;

            if (l < n && this.heap[l] > this.heap[largest]) largest = l;
            if (r < n && this.heap[r] > this.heap[largest]) largest = r;

            if (largest === i) break;
            this.#swap(i, largest);
            i = largest;
        }
    }

    // Add a value: put it at the end, then sift it up
    insert(num) {
        this.heap.push(num);
        this.#siftUp(this.heap.length - 1);
    }

    // Remove and return the largest value
    extractMax() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];       // save the root
        const last = this.heap.pop();   // remove the last element

        if (this.heap.length > 0) {
            this.heap[0] = last;        // move it to the root
            this.#siftDown(0);          // restore the heap
        }
        return max;
    }

    size() {
        return this.heap.length;
    }

    // Build the heap from an array in O(n)
    heapify(arr) {
        this.heap = [...arr];
        // Start at the last non-leaf node and sift each node down
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.#siftDown(i);
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Step 1: build a max-heap from all the stones, O(n)
        const heap = new MaxHeap();
        heap.heapify(stones);

        // Step 2: keep smashing while at least two stones remain
        while (heap.size() > 1) {
            // Step 3: take out the two heaviest stones
            const x = heap.extractMax();   // heaviest
            const y = heap.extractMax();   // second heaviest

            // Step 4: if they differ, the leftover (x - y) goes back in.
            // If they are equal, both are destroyed and nothing is added.
            if (x !== y) {
                heap.insert(x - y);
            }
        }

        // Step 5: one stone left -> return its weight; none left -> return 0
        return heap.size() === 1 ? heap.extractMax() : 0;
    }
}
