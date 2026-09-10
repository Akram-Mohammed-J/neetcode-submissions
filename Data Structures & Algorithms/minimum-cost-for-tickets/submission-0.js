class Solution {
    mincostTickets(days, costs) {
        const lastDay = days[days.length - 1];
        const travelDays = new Set(days);
        const dp = new Array(lastDay + 31).fill(0);   // padding so day+30 never goes out of bounds

        for (let i = lastDay; i >= 1; i--) {           // every day, backward — not just `days`, and not forward
            if (!travelDays.has(i)) {
                dp[i] = dp[i + 1];                       // nothing to buy — carry forward
            } else {
                dp[i] = Math.min(
                    costs[0] + dp[i + 1],
                    costs[1] + dp[i + 7],
                    costs[2] + dp[i + 30]
                );
            }
        }
        return dp[1];
    }
}