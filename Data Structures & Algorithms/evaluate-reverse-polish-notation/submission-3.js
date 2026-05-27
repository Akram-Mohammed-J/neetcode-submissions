class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let s = [];

        for (const t of tokens) {
            if (t === "+" || t == "-" || t == "*" || t == "/") {
                const b = s.pop();
                const a = s.pop();
                let result;
                if (t === "+") result = a + b;
                else if (t === "-") result = a - b;
                else if (t === "*") result = a * b;
                else result = Math.trunc(a / b);
                s.push(result)
            } else {
                s.push(Number(t));
            }
        }
        return s[0];
    }
}
