class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = -Infinity;
        let bestBuy = prices[0];
        for (let sellIdx = 0; sellIdx < prices.length; sellIdx++) {
            let currentProfit = prices[sellIdx] - bestBuy;
            profit = Math.max(profit, currentProfit);
            if (bestBuy > prices[sellIdx]) {
                bestBuy = prices[sellIdx];
            }
        }
        return profit
    }
}
