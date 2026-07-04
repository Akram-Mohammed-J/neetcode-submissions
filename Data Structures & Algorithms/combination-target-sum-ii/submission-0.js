class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        let i = 0;
        let combinations = [];
        let sum = 0;
        candidates.sort((a, b) => a - b);
        function generate(i, result, combinations, sum) {
            if (sum == target) {
                result.push([...combinations]);
                return
            }
            if (i >= candidates.length || sum > target) {
                return;
            }
            //desicsion to include current element
            combinations.push(candidates[i]);
            generate(i+1, result, combinations, sum+candidates[i]);
            // desicsion not to include current element
            combinations.pop();
            let j = i;
            while (j < candidates.length && candidates[i] == candidates[j + 1]) {
                j++;
            }
            generate(j+1, result, combinations, sum);
        }
        generate(i, result, combinations, sum);
        return result
    }
}
