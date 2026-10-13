class MaxHeap {
    constructor(compareFn = (a, b) => a - b) {
        this.heap = []
        this.compare = compareFn   // compareFn(a, b) > 0 means "a belongs higher than b"
    }

    #parent(i) { return Math.floor((i - 1) / 2) }
    #left(i) { return 2 * i + 1 }
    #right(i) { return 2 * i + 2 }

    size() { return this.heap.length }
    isEmpty() { return this.heap.length === 0 }
    peek() { return this.isEmpty() ? undefined : this.heap[0] }

    #swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }

    enqueue(value) {
        this.heap.push(value)
        let lastIndex = this.size() - 1
        this.heapfiyUp(lastIndex)
    }

    dequeue() {
        if (this.isEmpty()) return undefined

        let maxElement = this.heap[0]
        let lastIndex = this.size() - 1

        this.heap[0] = this.heap[lastIndex]
        this.heap.pop()

        if (!this.isEmpty()) {
            this.heapfiyDown(0)
        }

        return maxElement
    }

    heapfiyUp(i) {
        while (i > 0) {
            let parentIndex = this.#parent(i)
            if (this.compare(this.heap[parentIndex], this.heap[i]) < 0) {
                this.#swap(parentIndex, i)
                i = parentIndex
            } else {
                break
            }
        }
    }

    heapfiyDown(i) {
        while (true) {
            let leftIndex = this.#left(i)
            let rightIndex = this.#right(i)
            let largest = i

            if (leftIndex < this.size() && this.compare(this.heap[leftIndex], this.heap[largest]) > 0) {
                largest = leftIndex
            }
            if (rightIndex < this.size() && this.compare(this.heap[rightIndex], this.heap[largest]) > 0) {
                largest = rightIndex
            }
            if (largest == i) {
                break
            }

            this.#swap(i, largest)
            i = largest
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // compare tuples by DISTANCE (the first element) only
        const maxHeap = new MaxHeap((a, b) => a[0] - b[0]);

        for (let [x, y] of points) {
            let distance = x * x + y * y;
            maxHeap.enqueue([distance, x, y]);

            // once we have more than k candidates, evict the current FARTHEST one —
            // whatever survives at the end is guaranteed to be the k closest
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        const result = [];
        while (!maxHeap.isEmpty()) {
            const [, x, y] = maxHeap.dequeue();
            result.push([x, y]);
        }
        return result;
    }
}