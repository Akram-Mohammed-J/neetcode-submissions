class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let l = 0;
        let maxLen = 0;

        for (let r = 0; r < s.length; r++) {
            // 1. Add s[r] to the window
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // 2. Compute max count in window
            let maxCount = 0;
            for (const v of count.values()) maxCount = Math.max(maxCount, v);

            // 3. While window is invalid, shrink from left
            while (r - l + 1 - maxCount > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            // 4. Update maxLen with current window length
            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
