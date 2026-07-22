class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let str = [];
        function generate(openCount, closedCount) {
            if (openCount == n && closedCount == n) {
                result.push(str.join(""))
                return;
            }
            if (openCount < n) {
                str.push("(");
                generate(openCount + 1, closedCount);
                str.pop();
            }
            if (closedCount < openCount) {
                str.push(")");
                generate(openCount, closedCount + 1);
                str.pop();
            }
        }
        generate(0,0)
        return result;
    }
}
