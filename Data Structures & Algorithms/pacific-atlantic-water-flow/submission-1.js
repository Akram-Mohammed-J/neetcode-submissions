class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let pacific = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        let atlantic = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let result = [];
        

        function bfs(visited, queue) {
            while (queue.length > 0) {
                let [currentX, currentY] = queue.shift();
                for (let d of directions) {
                    let nextX = currentX + d[0];
                    let nextY = currentY + d[1];
                    if (
                        nextX < 0 ||
                        nextY < 0 ||
                        nextX >= ROWS ||
                        nextY >= COLS ||
                        heights[currentX][currentY] > heights[nextX][nextY] ||
                        visited[nextX][nextY] == true
                    ) {
                        continue;
                    } else {
                        queue.push([nextX, nextY]);
                        visited[nextX][nextY] = true;
                    }
                }
            }
        }
        let pacificQ = []
        for (let r = 0; r < ROWS; r++) {
            pacific[r][0] = true;
            pacificQ.push([r, 0]);
        }

        for (let c = 0; c < COLS; c++) {
            pacific[0][c] = true;
            pacificQ.push([0, c]);
        }

        bfs(pacific, pacificQ);
        let atlanticQ = []
        for (let r = ROWS - 1; r >= 0; r--) {
            atlantic[r][COLS - 1] = true;
            atlanticQ.push([r, COLS - 1]);
        }
        for (let c = COLS - 1; c >= 0; c--) {
            atlantic[ROWS - 1][c] = true;
            atlanticQ.push([ROWS-1, c]);
        }

        bfs(atlantic,atlanticQ);

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] == true && atlantic[r][c] == true) {
                    result.push([r, c]);
                }
            }
        }
        return result;
    }
}
