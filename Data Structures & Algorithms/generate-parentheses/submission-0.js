class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
     

        let result = [];
        let str = [];

        function generate(open, closed) {
        if (open === n && closed === n) {
            result.push(str.join(""));
            return;
        }
        
        if (open < n) {
            str.push("(");
            generate(open + 1, closed);
            str.pop();
        }
        
        if (closed < open) {
            str.push(")");
            generate(open, closed + 1);
            str.pop();
        }
    }
    
    generate(0, 0);
    return result;
    }
}
