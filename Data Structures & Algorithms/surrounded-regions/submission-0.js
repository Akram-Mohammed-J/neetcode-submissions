class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */

    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let q = [];

        const isBorder = (r, c) => {
            return r == 0 || r == rows - 1 || c == 0 || c == cols - 1;
        };
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O" && isBorder(r, c)) {
                    q.push([r, c]);
                    visited[r][c] = true;
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
                    nextX >= rows ||
                    nextY >= cols ||
                    board[nextX][nextY] == "X" ||
                    visited[nextX][nextY] == true 
                ) {
                    continue;
                } else {
                    visited[nextX][nextY] = true;
                    q.push([nextX, nextY])
                }
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O" && !visited[r][c]) {
                    board[r][c] = "X";
                }
            }
        }
    }
}
