class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        function expand(s, l, r) {
            while (l >= 0 && r <= s.length && s[l] == s[r]) {
                count++;
                l--;
                r++;
            }
        }
        for (let i = 0; i < s.length; i++) {
            expand(s, i, i);

            expand(s, i, i + 1);
        }

        return count;
    }
}
