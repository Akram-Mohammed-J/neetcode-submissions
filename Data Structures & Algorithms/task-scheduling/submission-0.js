class MaxHeap {
    constructor() {
        this.heap = []
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
        this.heapfiyUp(this.size() - 1)
    }

    dequeue() {
        if (this.isEmpty()) return undefined
        let maxElement = this.heap[0]
        let lastIndex = this.size() - 1
        this.heap[0] = this.heap[lastIndex]
        this.heap.pop()
        if (!this.isEmpty()) this.heapfiyDown(0)
        return maxElement
    }

    heapfiyUp(i) {
        while (i > 0) {
            let p = this.#parent(i)
            if (this.heap[p] < this.heap[i]) {
                this.#swap(p, i)
                i = p
            } else break
        }
    }

    heapfiyDown(i) {
        while (true) {
            let l = this.#left(i), r = this.#right(i), largest = i
            if (l < this.size() && this.heap[l] > this.heap[largest]) largest = l
            if (r < this.size() && this.heap[r] > this.heap[largest]) largest = r
            if (largest == i) break
            this.#swap(i, largest)
            i = largest
        }
    }
}


// best explanation https://www.youtube.com/watch?v=l36RYLmKGvQ
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Map();
        for (let task of tasks) {
            freq.set(task, (freq.get(task) || 0) + 1);
        }

        let maxHeap = new MaxHeap();
        for (let [, count] of freq) {
            maxHeap.enqueue(count);
        }

        let maxCount = maxHeap.dequeue();
        let gaps = maxCount - 1;
        let maxIdle = gaps * n;

        while (!maxHeap.isEmpty()) {
            let count = maxHeap.dequeue();
            maxIdle -= Math.min(gaps, count);
        }

        maxIdle = Math.max(0, maxIdle);
        return tasks.length + maxIdle;
    }
}