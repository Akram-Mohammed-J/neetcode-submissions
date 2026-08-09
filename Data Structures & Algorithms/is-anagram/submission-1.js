class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1Map = new Map();
        let s2Map = new Map();
        for (const char of s) {
            s1Map.set(char, (s1Map.get(char) || 0) + 1);
        }
        for (const char of t) {
            if (s1Map.has(char)) {
                s1Map.set(char, s1Map.get(char) - 1);
            } else {
                return false;
            }
        }
        for (const [key, value] of s1Map) {
            if (value != 0) {
                return false;
            }
        }
        return true;
    }
}
