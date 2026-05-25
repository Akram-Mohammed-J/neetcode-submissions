class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let char of s) {

            // Opening brackets
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            } else {

                // Closing bracket with empty stack
                if (stack.length === 0) {
                    return false;
                }

                let topElement = stack[stack.length - 1];

                // Matching brackets
                if (
                    (topElement === "(" && char === ")") ||
                    (topElement === "[" && char === "]") ||
                    (topElement === "{" && char === "}")
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}