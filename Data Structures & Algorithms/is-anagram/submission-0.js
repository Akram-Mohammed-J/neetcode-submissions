class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let m1 = {};
        if (s.length != t.length) {
            return false;
        } else {
            for (let c of s) {
                if (m1[c]) {
                    m1[c] += 1;
                } else {
                    m1[c] = 1;
                }
            }
             console.log(JSON.stringify(m1));
                for (let ch of t) {
                    if (m1[ch]) {
                        m1[ch] -= 1;
                    } else {
                        return false;
                    }
                }
                 console.log(JSON.stringify(m1));
                return true;
            }
    }
}
