class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /[A-Za-z0-9]/;
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (regex.test(s[l]) && regex.test(s[r])) {
                
                if (s[l].toLowerCase() == s[r].toLowerCase()) {
                    l++;
                    r--;
                    continue;
                } else {
                    return false;
                }
            } else {
                if (!regex.test(s[l])) {
                    l++;
                }
                if (!regex.test(s[r])) {
                    r--;
                }
            }
        }
        return true;
    }
}
