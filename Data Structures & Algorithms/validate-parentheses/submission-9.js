class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let char of s) {
            if (char === "{" || char === "(" || char === "[") {
                stack.push(char);
            } else {
                if (stack.length == 0) {
                    return false;
                }
                let topElement = stack[stack.length - 1];
                if (
                    (char == "}" && topElement == "{") ||
                    (char == ")" && topElement == "(") ||
                    (char == "]" && topElement == "[")
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
       return stack.length == 0
    }
}
