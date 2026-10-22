class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, speed[i]])
            .sort((a, b) => b[0] - a[0]); // closest to target first

        const stack = [];
        for (const [p, s] of cars) {
            const time = (target - p) / s;
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}