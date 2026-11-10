class Solution {
    canCompleteCircuit(gas, cost) {
        let totalDiff = 0;
        let tank = 0;
        let start = 0;

        for (let i = 0; i < gas.length; i++) {
            const diff = gas[i] - cost[i];
            totalDiff += diff;
            tank += diff;

            if (tank < 0) {
                start = i + 1;   // this starting point failed -- try the very next one
                tank = 0;         // reset the running total, clean slate
            }
        }

        return totalDiff >= 0 ? start : -1;
    }
}