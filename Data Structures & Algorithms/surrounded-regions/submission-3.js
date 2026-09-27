class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let visted = Array.from({ length: rows }, () => new Array(cols).fill(false));
        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let q = [];
        const isBorder = (r, c) => {
            if (r == 0 || c == 0 || c == cols - 1 || r == rows - 1) {
                return true;
            } else {
                return false;
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O" && isBorder(r, c)) {
                    q.push([r, c]);
                    visted[r][c] = true;
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
                    board[nextX][nextY] != "O" ||
                    visted[nextX][nextY] == true
                ) {
                    continue;
                } else {
                    q.push([nextX, nextY])
                    visted[nextX][nextY] = true
                }
            }
        }
           for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O" && !visted[r][c]) {
                   board[r][c] = "X"
                }
            }
        }
    }
}
