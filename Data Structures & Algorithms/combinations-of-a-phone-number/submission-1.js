class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "qprs",
            8: "tuv",
            9: "wxyz",
        };
        let result = [];
        function dfs(i, curStr) {
            if (curStr.length === digits.length) {
                result.push(curStr);
            }
            if(i >= digits.length) {
                return
            }

            let digitToChar = map[(digits[i])];
            

            for (let c of digitToChar) {
                dfs(i + 1, curStr + c);
            }
        }
        if (digits) {
            dfs(0, "");
        }
        return result;
    }
}
