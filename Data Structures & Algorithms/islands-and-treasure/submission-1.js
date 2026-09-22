class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let directions = [
            [-1, 0], //top
            [1, 0], //bottom
            [0, -1], //left
            [0, 1],
        ];
        let q = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                }
            }
        }
          while (q.length > 0) {
                let [currentX, currentY] = q.shift();

                for (let d of directions) {
                    let nextX = currentX + d[0];
                    let nextY = currentY + d[1];

                    if (
                        nextX < 0 ||
                        nextY < 0 ||
                        nextY >= COLS ||
                        nextX >= ROWS ||
                        grid[nextX][nextY] != 2147483647
                    ) {
                        continue;
                    }
                    grid[nextX][nextY] = grid[currentX][currentY] + 1;
                    q.push([nextX, nextY]);
                }
            }
    }
}
