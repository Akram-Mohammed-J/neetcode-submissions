class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = ""
        function expand(s, l, r) {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            return s.substring(l + 1, r);
        }

        for (let i = 0; i < s.length; i++) {
            let odd = expand(s, i, i); // center ON character i
            let even = expand(s, i, i + 1); // center BETWEEN i and i+1
            if (odd.length > longest.length) longest = odd;
            if (even.length > longest.length) longest = even;
        }
        return longest
    }
}
