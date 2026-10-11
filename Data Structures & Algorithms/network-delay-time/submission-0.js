class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    add(item) {
        this.heap.push(item);
        this.#bubbleUp(this.heap.length - 1);
    }

    pop() {
        const h = this.heap;
        if (h.length === 0) return undefined;
        const top = h[0];
        const last = h.pop();
        if (h.length > 0) {
            h[0] = last;
            this.#bubbleDown(0);
        }
        return top;
    }

    #bubbleUp(i) {
        const h = this.heap;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (h[parent][0] <= h[i][0]) break;
            [h[parent], h[i]] = [h[i], h[parent]];
            i = parent;
        }
    }

    #bubbleDown(i) {
        const h = this.heap;
        const n = h.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            if (l < n && h[l][0] < h[smallest][0]) smallest = l;
            if (r < n && h[r][0] < h[smallest][0]) smallest = r;
            if (smallest === i) break;
            [h[smallest], h[i]] = [h[i], h[smallest]];
            i = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // 1. adjacency list: adj[u] = [[v, w], ...]
        const adj = Array.from({ length: n + 1 }, () => []);
        for (const [u, v, w] of times) {
            adj[u].push([v, w]);
        }

        // 2. shortest known time from k to every node
        const dist = new Array(n + 1).fill(Infinity);
        dist[k] = 0;

        // 3. Dijkstra with a min-heap of [totalTime, node]
        const heap = new MinHeap();
        heap.add([0, k]);

        while (heap.size() > 0) {
            const [t, u] = heap.pop();
            if (t > dist[u]) continue; // stale entry

            for (const [v, w] of adj[u]) {
                const next = t + w;
                if (next < dist[v]) {
                    dist[v] = next;
                    heap.add([next, v]);
                }
            }
        }

        // 4. one pass: detect unreachable and find the max
        let ans = 0;
        for (let i = 1; i <= n; i++) {
            if (dist[i] === Infinity) return -1;
            ans = Math.max(ans, dist[i]);
        }
        return ans;
    }
}

