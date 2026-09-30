class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adList = new Map();
        let visited = new Array(numCourses).fill(0);
        let stk = [];
        for (let i = 0; i < numCourses; i++) {
            adList.set(i, []);
        }
        for (let [crs, pre] of prerequisites) {
            let edges = adList.get(crs);
            edges.push(pre);
            adList.set(crs, edges);
        }

        const dfs = (cr) => {
            if (visited[cr] == 1) {
                return false;
            }
            if (visited[cr] == 2) {
                return true;
            }
            visited[cr] = 1;
            let edges = adList.get(cr);
            for (let edge of edges) {
                if (!dfs(edge)) return false;
            }
            stk.push(cr);
            visited[cr] = 2;
            return true;
        };
        for (let i = 0; i < numCourses; i++) {
                let isCycle = dfs(i)
                if(isCycle == false) {
                    return []
                }
        }
        return stk;
    }
}
