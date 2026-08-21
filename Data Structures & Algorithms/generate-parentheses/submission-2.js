class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let str = "";
        let open = 0;
        let closed = 0;
        let result = [];
        let strArray = [];
        function solve(open, closed) {
            if (open === n && closed == n) {
                result.push(strArray.join(""));
                return;
            }
            if (open < n) {
                strArray.push("(");
                solve(open + 1, closed);
                strArray.pop();
            }
            if (closed < open) {
                strArray.push(")");
                solve(open, closed + 1);
                strArray.pop();
            }
        }
        solve(open, closed);
        return result;
    }
}
