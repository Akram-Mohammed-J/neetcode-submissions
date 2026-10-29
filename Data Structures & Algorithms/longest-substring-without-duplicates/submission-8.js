class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length
        let longest = 0

        let map = new Map();
        let start = 0;

        for (let runner = 0; runner < n; runner++) {
            // if encounter the duplicate (invalid pattern)update the  start window to slide  Math.max(longest, (runner + 1) - start);
            // update the longest and continue the runner to capture
            let key = s[runner];
            while (map.has(key)) {
                map.delete(s[start]);
                start++;
            }
                map.set(key, 1);
                longest = Math.max(longest, runner+1  - start);
            
        }
        return longest;
    }
}
