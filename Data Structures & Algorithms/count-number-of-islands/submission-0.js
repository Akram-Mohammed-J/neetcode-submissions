class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visted = new Set();
        let noOfIslands = 0;

        function bfs(r, c) {
            const q = [];
            q.push([r, c]);
            visted.add(`${r}-${c}`);

            while (q.length > 0) {
                let [row, col] = q.shift();

                // top
                if (row - 1 >= 0 && grid[row - 1][col] == "1" && !visted.has(`${row - 1}-${col}`)) {
                    visted.add(`${row - 1}-${col}`);
                    q.push([row - 1, col]);
                }
                // bottom
                if (row + 1 < ROWS && grid[row + 1][col] == "1" && !visted.has(`${row + 1}-${col}`)) {
                    visted.add(`${row + 1}-${col}`);
                    q.push([row + 1, col]);
                }
                // right
                if (col + 1 < COLS && grid[row][col + 1] == "1" && !visted.has(`${row}-${col + 1}`)) {
                    visted.add(`${row}-${col + 1}`);
                    q.push([row, col + 1]);
                }
                // left
                if (col - 1 >= 0 && grid[row][col - 1] == "1" && !visted.has(`${row}-${col - 1}`)) {
                    visted.add(`${row}-${col - 1}`);
                    q.push([row, col - 1]);
                }
            }
        }

        // scan the grid
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == "1" && !visted.has(`${r}-${c}`)) {
                    noOfIslands++;
                    bfs(r, c);
                }
            }
        }
        return noOfIslands;
    }
}