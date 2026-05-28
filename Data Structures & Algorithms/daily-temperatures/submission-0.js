class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
   dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = [];   // holds indices, temps at those indices are monotonically decreasing
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}
}
