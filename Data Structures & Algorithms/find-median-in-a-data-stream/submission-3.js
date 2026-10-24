class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Add an element
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Remove and return the maximum element
    pop() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return max;
    }

    // Return maximum without removing
    peek() {
        return this.heap[0] ?? null;
    }

    // Move element upward
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // MaxHeap: parent should be greater than child
            if (this.heap[parent] >= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    // Move element downward
    heapifyDown() {
        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let largest = index;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            // Current element is already the largest
            if (largest === index) {
                break;
            }

            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Add an element
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Remove and return the minimum element
    pop() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return min;
    }

    // Return minimum without removing
    peek() {
        return this.heap[0] ?? null;
    }

    // Move element upward
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // MinHeap: parent should be smaller than child
            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    // Move element downward
    heapifyDown() {
        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            // Current element is already the smallest
            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {

        // Add to the correct half
        if (
            this.maxHeap.isEmpty() ||
            num <= this.maxHeap.peek()
        ) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        // maxHeap should never have more than
        // ONE extra element compared to minHeap.
        if (this.maxHeap.size() > this.minHeap.size() + 1) {

            // Remove the largest element from maxHeap
            const max = this.maxHeap.pop();

            // Move it to minHeap
            this.minHeap.push(max);
        }

        // minHeap should never have more elements than maxHeap.
        if (this.minHeap.size() > this.maxHeap.size()) {

            // Remove the smallest element from minHeap
            const min = this.minHeap.pop();

            // Move it to maxHeap
            this.maxHeap.push(min);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {

        // Odd number of elements
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }

        // Even number of elements
        return (
            this.maxHeap.peek() +
            this.minHeap.peek()
        ) / 2;
    }
}