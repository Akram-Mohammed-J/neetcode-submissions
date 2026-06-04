class Solution {
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.canFinish(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    canFinish(piles, h, k) {
        let total = 0;
        for (const pile of piles) {
            total += Math.ceil(pile / k);
            if (total > h) return false;
        }
        return total <= h;
    }
}