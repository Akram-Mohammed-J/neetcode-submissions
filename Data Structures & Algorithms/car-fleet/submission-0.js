class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, positions, speed) {
        const cars = positions.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        let s = [];
        for (let car of cars) {
            let time = (target - car[0]) / car[1];
            if (s.length == 0 || time > s[s.length - 1]) {
                s.push(time);
            } else {
                continue;
            }
        }
        return s.length;
    }
}
