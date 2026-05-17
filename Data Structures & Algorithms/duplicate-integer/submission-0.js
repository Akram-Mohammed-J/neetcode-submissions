class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map  = {};
        for(let n of nums) {
            if(map[n]) {
                return true;
            } else {
                map[n] = 1
            }
        }
        return false;
    }
}
