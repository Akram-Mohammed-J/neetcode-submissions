class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let good = new Set();

        triplets.forEach((t) => {
            // skip any triplet with EVEN ONE element exceeding target --
            // merging it in would push that position past target forever
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                return;
            }
            t.forEach((val, idx) => {
                if (val === target[idx]) {
                    good.add(idx);
                }
            });
        });

        return good.size === 3;
    }
}