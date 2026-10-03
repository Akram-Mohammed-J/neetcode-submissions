class Solution {
    findRedundantConnection(edges) {
        const n = edges.length;
        const parent = Array.from({ length: n + 1 }, (_, i) => i); // 1-indexed

        const find = (x) => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]); // path compression
            }
            return parent[x];
        };

        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);
            if (rootA === rootB) return false; // already connected -> cycle
            parent[rootB] = rootA;             // merge
            return true;
        };

        for (const [a, b] of edges) {
            if (!union(a, b)) return [a, b];
        }
    }
}