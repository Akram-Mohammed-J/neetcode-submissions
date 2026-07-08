class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
letterCombinations(digits) {
    if (digits.length === 0) return [];
    
    const map = new Map([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]],
    ]);
    
    const result = [];
    const current = [];
    
    function dfs(idx) {
        // Base case: we've picked a letter for every digit
        if (idx === digits.length) {
            result.push(current.join(""));
            return;
        }
        
        const letters = map.get(digits[idx]);
        
        // Try each possible letter for this digit
        for (const letter of letters) {
            current.push(letter);
            dfs(idx + 1);
            current.pop();
        }
    }
    
    dfs(0);
    return result;
}

}
