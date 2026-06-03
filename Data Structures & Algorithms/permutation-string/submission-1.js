class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const k = s1.length;
        const s1Count = new Map();
        const windowCount = new Map();

        // Build s1Count and the first window's count
        for (let i = 0; i < k; i++) {
            s1Count.set(s1[i], (s1Count.get(s1[i]) || 0) + 1);
            windowCount.set(s2[i], (windowCount.get(s2[i]) || 0) + 1);
        }

        if (this.mapsEqual(s1Count, windowCount)) return true;

        for (let r = k; r < s2.length; r++) {
            // Add new right character
            windowCount.set(s2[r], (windowCount.get(s2[r]) || 0) + 1);

            // Remove old left character
            const leftChar = s2[r - k];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);
            if (windowCount.get(leftChar) === 0) {
                windowCount.delete(leftChar);
            }

            if (this.mapsEqual(s1Count, windowCount)) return true;
        }

        return false;
    }

    mapsEqual(a, b) {
        if (a.size !== b.size) return false;
        for (const [key, val] of a) {
            if (b.get(key) !== val) return false;
        }
        return true;
    }
}
