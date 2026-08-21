class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function solve(str, open, closed) {
            if (str.length === 2 * n) {
                result.push(str);
                return;
            }
            if (open < n) {
               
                solve(str+"(", open + 1, closed);
            }

            if (closed < open) {
               
                solve(str+")", open, closed + 1);
            }
        }
        solve("", 0, 0);
        return result;
    }
}
