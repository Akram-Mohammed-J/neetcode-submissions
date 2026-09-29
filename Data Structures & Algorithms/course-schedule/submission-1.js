class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let g = new Map();
        // CHANGED: 0 = unvisited, 1 = in progress (on current path), 2 = done
        let state = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            g.set(i, []);
        }

        for (let [pre, crs] of prerequisites) {
            let edges = g.get(crs);
            edges.push(pre);
            g.set(crs, edges);
        }

        function dfs(src) {
            state[src] = 1; // mark as "in progress"

            let nbrs = g.get(src);
            for (let nbr of nbrs) {
                if (state[nbr] === 1) {
                    // CHANGED: hit a node currently on the path -> cycle found
                    return true; // true means "cycle detected"
                }
                if (state[nbr] === 0) {
                    // CHANGED: check nbr, not src (this was the original bug)
                    if (dfs(nbr)) {
                        return true; // propagate cycle detection up
                    }
                }
                // if state[nbr] === 2, it's fully explored already — safe, skip
            }

            state[src] = 2; // CHANGED: mark "done" only after all neighbors finish
            return false;   // no cycle found from this node
        }

        for (let c = 0; c < numCourses; c++) {
            if (state[c] === 0) {
                if (dfs(c)) {
                    // CHANGED: short-circuit — stop as soon as a cycle is found
                    return false;
                }
            }
        }

        return true; // CHANGED: original function returned nothing at all
    }
}