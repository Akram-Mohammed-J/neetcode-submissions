class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let pacific = new Set();
        let atlantic = new Set();

        function dfs(r, c, visited) {
            // Outside the grid
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
                return;
            }

            let key = `${r}-${c}`;

            // Already visited
            if (visited.has(key)) {
                return;
            }

            visited.add(key);

            for (let d of directions) {
                let nr = r + d[0];
                let nc = c + d[1];

                // Outside the grid
                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) {
                    continue;
                }

                // Reverse water flow
                if (heights[nr][nc] >= heights[r][c]) {
                    dfs(nr, nc, visited);
                }
            }
        }

        // Pacific Ocean
        // Top row
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
        }

        // Left column
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
        }

        // Atlantic Ocean
        // Bottom row
        for (let c = 0; c < COLS; c++) {
            dfs(ROWS - 1, c, atlantic);
        }

        // Right column
        for (let r = 0; r < ROWS; r++) {
            dfs(r, COLS - 1, atlantic);
        }

        let result = [];

        // Cells reachable from BOTH oceans
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                let key = `${r}-${c}`;

                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}