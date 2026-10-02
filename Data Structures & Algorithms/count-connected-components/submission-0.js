class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adList = new Map();
        for (let i = 0; i < n; i++) adList.set(i, []);
        for (let [a, b] of edges) {
            adList.get(a).push(b);
            adList.get(b).push(a);
        }
        let count = 0;
        let visited = new Array(n).fill(false);

        const dfs = (i) => {
            visited[i] = true;
            for (let ed of adList.get(i)) {
                if (!visited[ed]) {
                    dfs(ed);
                }
            }
        };
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i);
            }
        }
        return count;
    }
}
