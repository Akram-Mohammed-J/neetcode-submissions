class Solution {
    permute(nums) {
        let result = [];
        let usedArray = new Array(nums.length).fill(false);
        let permuteArray = [];
        
        function dfs() {
            // BASE CASE: filled all n slots
            if (permuteArray.length === nums.length) {
                result.push([...permuteArray]);
                return;
            }
            
            // Try every element as the next slot
            for (let i = 0; i < nums.length; i++) {
                if (usedArray[i]) continue;   // skip used
                
                // choose
                usedArray[i] = true;
                permuteArray.push(nums[i]);
                
                // recurse (no index needed - length of permuteArray tracks depth)
                dfs();
                
                // undo
                usedArray[i] = false;
                permuteArray.pop();
            }
        }
        
        dfs();
        return result;
    }
}