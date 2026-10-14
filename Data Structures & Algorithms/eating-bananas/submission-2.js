class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // for a given speed k, how many hours would it take to finish everything?
        function hoursNeeded(k) {
            let total = 0;
            for (const pile of piles) {
                total += Math.ceil(pile / k);
            }
            return total;
        }

        let low = 1;
        let high = Math.max(...piles);   // no useful speed is bigger than the largest pile

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (hoursNeeded(mid) <= h) {
                // this speed finishes in time — try going slower
                high = mid;
            } else {
                // too slow — speed up
                low = mid + 1;
            }
        }

        return low;
    }
}