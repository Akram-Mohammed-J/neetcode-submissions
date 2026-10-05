class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let word_set = new Set(wordList);
        let queue = [];
        queue.push([beginWord, 1]);
        while (queue.length > 0) {
            let [currentWord, count] = queue.shift();
            if (currentWord === endWord) {
                return count;
            }
            for (let i = 0; i < 26; i++) {
                for (let j = 0; j < currentWord.length; j++) {
                    let letter = String.fromCharCode(97 + i);
                    let newWord = currentWord.slice(0, j) + letter + currentWord.slice(j + 1);
                    if (word_set.has(newWord)) {
                        word_set.delete(newWord);
                        queue.push([newWord, count + 1]);
                    }
                }
            }
           
        }
         return 0;
    }
}
