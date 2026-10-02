class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }
        let adList = new Map();
        let visited = new Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            adList.set(i, []);
        }
        for (let [v, e] of edges) {
            adList.get(v).push(e);
            adList.get(e).push(v);
        }
        const dfs = (i) => {
            visited[i] = true;
            let edges = adList.get(i);
            for (let ed of edges) {
                if (!visited[ed]) {
                    dfs(ed);
                }
            }
        };

        dfs(0);

        return visited.every(Boolean);
    }
}
