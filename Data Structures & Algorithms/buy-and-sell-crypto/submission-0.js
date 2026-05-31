class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        let p1 = 0;
        let p2 = p1 + 1;
        while (p2 < prices.length) {
            if (prices[p2] > prices[p1]) {
                let currProfit = prices[p2] - prices[p1];
                maxProfit = Math.max(currProfit, maxProfit);
                p2++;
                
            } else {
                p1 = p2;
                p2++;
            }
        }
        return maxProfit;
    }
}
