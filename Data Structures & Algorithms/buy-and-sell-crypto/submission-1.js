class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 1;
        let purchase = prices[0];
        let maxProfit = 0;

        while (l < prices.length) {
            let currentProfit = prices[l] - purchase;
            if (prices[l] < purchase) {
                purchase = prices[l];
            }
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
            l++;
        }

        return maxProfit;
    }
}
