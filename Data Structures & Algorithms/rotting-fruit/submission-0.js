class Solution {
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = [];
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let freshCount = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                } else if (grid[r][c] === 1) {
                    freshCount++;
                }
            }
        }

        let minutes = 0;

        while (q.length > 0 && freshCount > 0) {
            const size = q.length; // snapshot this level's size

            for (let i = 0; i < size; i++) {
                const [currentX, currentY] = q.shift();

                for (const d of directions) {
                    const nextX = currentX + d[0];
                    const nextY = currentY + d[1];

                    if (
                        nextX < 0 ||
                        nextY < 0 ||
                        nextX >= ROWS ||
                        nextY >= COLS ||
                        grid[nextX][nextY] !== 1
                    ) {
                        continue;
                    }

                    grid[nextX][nextY] = 2;
                    freshCount--;
                    q.push([nextX, nextY]);
                }
            }

            minutes++;
        }

        return freshCount === 0 ? minutes : -1;
    }
}