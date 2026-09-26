class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        // visited[r][c] will end up TRUE for every cell we can prove is
        // "safe" — meaning it has some path of connected 'O's leading
        // all the way back out to the edge of the board.
        let visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

        // the four moves we're allowed to make from any cell: up, down, left, right
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // the BFS queue — cells we've marked safe but whose NEIGHBORS
        // we haven't checked yet
        let q = [];

        // a cell is "on the border" if it sits on the outermost
        // row or column of the grid
        const isBorder = (r, c) => (r === 0 || r === rows - 1 || c === 0 || c === cols - 1);

        // ---------- PHASE 1: seed the search ----------
        // Any open cell ('O') that's ALREADY on the border is safe for
        // free — it touches the outside directly, no proof needed.
        // Mark it visited, and add it to the queue so we can explore
        // outward from it in phase 2.
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O" && isBorder(r, c)) {
                    q.push([r, c]);
                    visited[r][c] = true;
                }
            }
        }

        // ---------- PHASE 2: spread safety outward (BFS) ----------
        // Keep pulling cells off the queue. For each one, look at its
        // four neighbors. If a neighbor is a valid, not-yet-visited
        // open cell, it inherits safety from the cell we're
        // standing on — mark it visited, and queue it up so we
        // check ITS neighbors too.
        while (q.length > 0) {
            let [currentX, currentY] = q.shift();

            for (let d of directions) {
                let nextX = currentX + d[0];
                let nextY = currentY + d[1];

                // skip this neighbor if ANY of these are true:
                //   - it's off the edge of the grid
                //   - it's a wall ('X'), not an open cell
                //   - we've already marked it safe
                if (
                    nextX < 0 ||
                    nextY < 0 ||
                    nextX >= rows ||
                    nextY >= cols ||
                    board[nextX][nextY] !== "O" ||
                    visited[nextX][nextY]
                ) {
                    continue;
                }

                // otherwise, this neighbor is safe too — record it,
                // and queue it so the search continues from here
                visited[nextX][nextY] = true;
                q.push([nextX, nextY]);
            }
        }

        // ---------- PHASE 3: capture whatever's left ----------
        // By now, `visited` is fully settled — every cell that COULD
        // be proven safe already has been. Any 'O' that's STILL not
        // visited has no path back to the border at all, however far
        // you'd have to travel to check. That's the definition of
        // "surrounded" — flip it to 'X'.
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O" && !visited[r][c]) {
                    board[r][c] = "X";
                }
            }
        }
    }
}