class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map  = new Map()
        let max = -Infinity
        let l = 0;
        for (let r=0; r < s.length; r++) {
             if (map.has(s[r]) && map.get(s[r]) >= l) {
                // jump by one spot dont throw the window like  l = r+1
                l = map.get(s[r]) + 1;
            }
            map.set(s[r], r);
            max = Math.max(max, r - l + 1);
        
        }

        return max == -Infinity ? 0 : max
    }
}
