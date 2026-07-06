
/**
 * Check whether `word` can be constructed by walking adjacent cells in `board`.
 * Each cell can be used at most once per path.
 *
 * @param {string[][]} board
 * @param {string} word
 * @returns {boolean}
 */
class Solution {
 exist(board, word) {

    function backtrack(row, col, i, board, word) {
    // ─── BASE CASE 1: SUCCESS ───
    // We've matched every character. If i equals word.length, that means
    // characters word[0..word.length-1] have all been matched — we're done.
    if (i === word.length) return true;

    // ─── BASE CASE 2: OUT OF BOUNDS ───
    // If (row, col) is outside the grid, this path is invalid.
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length) {
        return false;
    }

    // ─── BASE CASE 3: CHARACTER MISMATCH ───
    // The current cell doesn't match the character we need — dead end.
    // (Also catches the "#" marker used for visited cells, since "#" won't match any letter.)
    if (board[row][col] !== word[i]) return false;

    // ─── MARK CELL AS VISITED ───
    // Save the original character so we can restore it later.
    // Then overwrite this cell with "#" so future recursive calls see it as "visited"
    // (any character that can't match a letter in the word works).
    const temp = board[row][col];
    board[row][col] = "#";

    // ─── EXPLORE 4 NEIGHBORS ───
    // Try each direction. The || short-circuits — as soon as ANY direction returns true,
    // we stop trying others. Increment i because we've matched the current character.
    const res =
        backtrack(row + 1, col, i + 1, board, word) ||   // down
        backtrack(row - 1, col, i + 1, board, word) ||   // up
        backtrack(row, col + 1, i + 1, board, word) ||   // right
        backtrack(row, col - 1, i + 1, board, word);     // left

    // ─── BACKTRACK: UNMARK CELL ───
    // Restore the cell so other paths (starting from different cells) can use it too.
    // This is the crucial "undo" step of backtracking.
    board[row][col] = temp;

    return res;
}


    // Try every cell as a possible starting position.
    // If ANY cell can spell out the word starting from it, we return true.

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            // Start recursion at i=0 — the recursion itself checks whether
            // board[row][col] matches word[0], so no need to check here.
            if (backtrack(row, col, 0, board, word)) return true;
        }
    }
    // Tried every starting cell, none worked.
    return false;
}
}

