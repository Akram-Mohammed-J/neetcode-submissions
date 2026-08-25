class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let colsSet = new Set();
        let posDiag = new Set(); // r+c
        let negDiag = new Set(); // r-c
        let result = [];
        let board = Array.from({ length: n }).map(() => Array.from({ length: n }).fill("."));
        function backtrack(r) {
            if (r == n) {
                let boardCopy = board.map((eachRow) => eachRow.join(""));
                result.push(boardCopy)
            }
            for(let c=0; c<n; c++) {
                if(colsSet.has(c) || posDiag.has(r+c) || negDiag.has(r-c)) {
                    continue
                }else {
                    // chose to include
                    colsSet.add(c)
                    posDiag.add(r+c)
                    negDiag.add(r-c)
                    board[r][c] = "Q"
                    backtrack(r+1)
                    // chose not to include
                    colsSet.delete(c)
                    posDiag.delete(r+c)
                    negDiag.delete(r-c)
                    board[r][c] = "."

                }
            }
        }
        backtrack(0);
        return result

    }
}
