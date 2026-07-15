class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        let map = new Map();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            if (map.has(char)) {
                // shrink from the left, deleting each character
                // as we pass it, until we've removed the duplicate too
                while (map.has(char)) {
                    map.delete(s[left]);
                    left++;
                }
            }
            map.set(char, 1);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
