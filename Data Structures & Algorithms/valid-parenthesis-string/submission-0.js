class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftMax = 0;
        let leftMin = 0;
        for (let char of s) {
            if (char === "(") {
                leftMin += 1;
                leftMax += 1;
            } else if (char === ")") {
                leftMin -= 1;
                leftMax -= 1;
            } else {
                leftMin -= 1;
                leftMax += 1;
            }
            if (leftMax < 0) {
                return false;
            }
            if (leftMin < 0) {
                leftMin = 0;
            }
        }
        return leftMin == 0;
    }
}
