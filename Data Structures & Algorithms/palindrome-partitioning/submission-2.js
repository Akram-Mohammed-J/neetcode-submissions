class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  
  partition(s) {
    let result = [];
    let part = [];
    function pali(s, i, j) {
    while (i < j) {
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

    function backtrack(i) {
      if (i == s.length) {
        result.push([...part]);
        return;
      }
      for (let j = i; j < s.length; j++) {
        if (pali(s, i, j)) {
          part.push(s.substring(i, j + 1));
          backtrack(j + 1);
          part.pop();
        }
      }
    }
    backtrack(0)
    return result;
  }
}
