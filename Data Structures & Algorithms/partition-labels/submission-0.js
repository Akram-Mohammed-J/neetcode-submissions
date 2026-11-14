class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let map = new Map();
        for (let i = 0; i < S.length; i++) {
            map.set(S[i], i);
        }
        let size = 0;
        let end = 0;
        let result = [];
        for (let i = 0; i < S.length; i++) {
             size += 1;
            end = Math.max(end, map.get(S[i]));
            if (i === end) {
                result.push(size);
                size = 0;
            }
           
        }
        return result;
    }
}
