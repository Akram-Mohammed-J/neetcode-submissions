class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const adList = new Map();
        for (let i = 0; i < n; i++) adList.set(i, []);

        for (const [a, b] of edges) {
            adList.get(a).push(b);
            adList.get(b).push(a); // undirected: both directions
        }

        const visited = new Array(n).fill(false);

        const dfs = (v) => {
            visited[v] = true;
            for (const nei of adList.get(v)) {
                if (!visited[nei]) {
                    dfs(nei)
                };
            }
        };

        dfs(0);
        return visited.every(Boolean); // all nodes reached => connected => tree
    }
}
