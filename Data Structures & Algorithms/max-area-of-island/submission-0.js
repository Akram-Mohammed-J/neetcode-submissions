class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let visit = new Set();
        let max = -Infinity;
        function dfs(r, c) {
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) {
                return 0;
            }
            if (grid[r][c] !== 1 || visit.has(`${r}-${c}`)) {
                return 0;
            }
            visit.add(`${r}-${c}`);
            // explore all directions
            let area = 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
            return area;
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                max = Math.max(max, dfs(i, j));
            }
        }
        return max != -Infinity ? max : 0;
    }
}
