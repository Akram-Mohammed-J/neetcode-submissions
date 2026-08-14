class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        function dfs(x, y, index) {
            // Out of bounds
            if (x < 0 || x >= rows || y < 0 || y >= cols) {
                return false;
            }

            // Character doesn't match
            if (board[x][y] !== word[index]) {
                return false;
            }

            // Found the complete word
            if (index === word.length - 1) {
                return true;
            }

            // Mark current cell as visited
            const original = board[x][y];
            board[x][y] = '#';

            // Explore all 4 directions
            const found =
                dfs(x + 1, y, index + 1) ||
                dfs(x - 1, y, index + 1) ||
                dfs(x, y + 1, index + 1) ||
                dfs(x, y - 1, index + 1);

            // Backtrack: restore the cell
            board[x][y] = original;

            return found;
        }

        // Word can start from any cell
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                if (dfs(x, y, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}