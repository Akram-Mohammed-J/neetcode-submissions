class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {

            while (
                stack.length > 0 &&
                temperatures[stack[stack.length - 1]] < temperatures[i]
            ) {
                let currentIndex = stack.pop();

                result[currentIndex] = i - currentIndex;
            }

            stack.push(i);
        }

        return result;
    }
}
