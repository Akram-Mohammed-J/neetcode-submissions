class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647;
        const visited = new Set();
        const queue = [];

        // seed the BFS with EVERY gate at once
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    visited.add(`${r}-${c}`);
                }
            }
        }

        let distance = 0;
        while (queue.length > 0) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.shift();
                if (distance > 0) grid[r][c] = distance;   // gates themselves stay 0

                const neighbors = [[r-1,c],[r+1,c],[r,c-1],[r,c+1]];
                for (const [nr, nc] of neighbors) {
                    if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS) continue;
                    if (grid[nr][nc] === -1) continue;                 // wall
                    const key = `${nr}-${nc}`;
                    if (visited.has(key)) continue;

                    visited.add(key);
                    queue.push([nr, nc]);
                }
            }
            distance++;
        }
    }
} 