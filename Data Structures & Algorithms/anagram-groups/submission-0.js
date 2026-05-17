class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let str of strs) {
            let key = str.split("").sort().join("");
            if (map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str])
            }
        }
       return  Array.from(map.values())
    }
}
